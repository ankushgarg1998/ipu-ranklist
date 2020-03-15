import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ModelService } from '../model.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    isDataPresent = false;
    overall: boolean;

    fullList = [];
    list = [];
    subjectBest = {};
    criteria = 'percentage';

    @Input() course: string;
    @Input() selections: any;

    constructor(private modelService: ModelService, private eventService: EventService, private spinner: NgxSpinnerService, private router: Router) { }

    ngOnInit() {
        // console.log(this.selections);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selections']) {
            let keys = Object.keys(this.selections);
            if (this.validateSelections()) {
                this.fetchData();
            } else {
                if (this.course === 'btech') {
                    this.router.navigate(['/ranklist']);
                } else if (this.course === 'bca') {
                    this.router.navigate(['/bca-ranklist']);
                }
            }
        }
    }

    validateSelections() {
        let keys = Object.keys(this.selections);
        if (this.course === 'btech') {
            return (keys.includes('college') && keys.includes('shift') && keys.includes('batch') && keys.includes('branch') && keys.includes('sem'));
        } else if (this.course === 'bca') {
            return (keys.includes('college') && keys.includes('batch') && keys.includes('sem'));
        }
        return false;
    }

    fetchData() {
        this.list = [];
        this.spinner.show();
        if (this.course === 'btech') {
            this.modelService.getList(this.selections['college'], this.selections['shift'], this.selections['batch'], this.selections['branch'], this.selections['sem'])
                .subscribe((res: any[]) => {
                    // console.log(res);
                    this.overall = (this.selections['sem'] === '0');
                    this.setListWithRanking(res);
                    this.spinner.hide();
                    this.isDataPresent = true;
                });
        } else if (this.course === 'bca') {
            this.modelService.getBcaList(this.selections['college'], this.selections['batch'], this.selections['sem'])
                .subscribe((res: any[]) => {
                    // console.log(res);
                    this.overall = (this.selections['sem'] === '0');
                    this.setListWithRanking(res);
                    this.spinner.hide();
                    this.isDataPresent = true;
                });
        }
    }

    setListWithRanking(res) {
        if (this.overall) {
            this.setOverallSemesterInResponse(res);
        }
        this.setGpa(res);
        this.fullList = this.sortResponse(res);
        this.setRanks();
        this.setSubjectBest();
        this.setFinalList();
    }

    setOverallSemesterInResponse(res) {
        res.forEach(element => {
            element.semester = {
                semester_no: 0,
                total_marks: 0,
                max_marks: 0,
                total_credit_marks: 0,
                max_credit_marks: 0,
                total_grade_points: 0,
                max_credits: 0
            };
            element.semesters.forEach(sem => {
                element.semester.total_marks += sem.total_marks;
                element.semester.max_marks += sem.max_marks;
                element.semester.total_credit_marks += sem.total_credit_marks;
                element.semester.max_credit_marks += sem.max_credit_marks;
                element.semester.total_grade_points += (sem.total_grade_points || 0);
                element.semester.max_credits += sem.max_credits;
            });
            element.semester.percentage = ((element.semester.total_marks * 100) / element.semester.max_marks) || 0;
            element.semester.credit_percentage = ((element.semester.total_credit_marks * 100) / element.semester.max_credit_marks) || 0;
        });
    }

    setGpa(res) {
        res.forEach(element => {
            if(element.semester.max_credits === 0 || element.semester.total_grade_points === 0)
                element.semester.gpa = 0;
            else
                element.semester.gpa = element.semester.total_grade_points / element.semester.max_credits;
        });
    }

    sortResponse(res) {
        return res.sort((a, b) => {
            let aVal = a.semester[this.criteria];
            let bVal = b.semester[this.criteria];
            return (aVal < bVal ? 1 : (aVal > bVal ? -1 : 0));
        });
    }

    setRanks() {
        if (this.fullList.length > 0)
            this.fullList[0].rank = 1;
        let rank = 1, lag = 0;
        for (let i = 1; i < this.fullList.length; i++) {
            let currentVal = this.fullList[i].semester[this.criteria];
            let previousVal = this.fullList[i - 1].semester[this.criteria];
            if (currentVal === previousVal) {
                this.fullList[i].rank = rank;
                ++lag;
            }
            else {
                rank += lag;
                this.fullList[i].rank = ++rank;
                lag = 0;
            }
        }
    }

    setSubjectBest() {
        if (!this.overall) {
            for (let i = 0; i < this.fullList.length; i++) {
                this.fullList[i].semester.subjects.forEach(sub => {
                    this.subjectBest[sub.paper_id] = Math.max(this.subjectBest[sub.paper_id] || 0, sub.marks);
                });
            }
        }
    }

    setFinalList() {
        if (this.fullList.length > 0 && this.fullList[0].semester.max_marks === 0) {
            this.list = [];
        } else {
            this.list = this.fullList.slice();
        }
    }


    rowClicked(index) {
        let emittedModalData = {
            student: this.list[index],
            metadata: {
                subjectBest: this.subjectBest
            }
        };
        this.eventService.rowSelected(emittedModalData);
    }

    onSearch(e) {
        let str = e.srcElement.value.toUpperCase();
        this.list = this.fullList.filter(banda => (banda.name.includes(str) || banda.enroll_no.includes(str)));
    }

    changeCriteria(c) {
        if (this.criteria !== c) {
            this.criteria = c;
            this.fullList = this.sortResponse(this.fullList);
            this.setRanks();
            this.setFinalList();
        }
    }

}
