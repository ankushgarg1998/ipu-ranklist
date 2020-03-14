import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModelService } from '../../shared/model.service';
import { ListService } from '../list.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
    fullList= [];
    list = [];
    subjectHighest = {};
    @Input() selections;
    isDataPresent = false;
    
    constructor(private modelService: ModelService, private listService: ListService, private spinner: NgxSpinnerService) { }

    ngOnInit() {
        // console.log(this.selections);
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['selections']) {
            let keys = Object.keys(this.selections);
            if(keys.includes('college') && keys.includes('shift') && keys.includes('batch') && keys.includes('branch') && keys.includes('sem')) {
                this.list = [];
                this.spinner.show();
                this.modelService.getList(this.selections['college'], this.selections['shift'], this.selections['batch'], this.selections['branch'], this.selections['sem'])
                    .subscribe((res: any[]) => {
                        // console.log(res);
                        if(this.selections['sem'] === '0') {
                            this.setListWithRanking(res, true);
                        } else {
                            this.setListWithRanking(res, false);
                        }
                        this.spinner.hide();
                        this.isDataPresent = true;
                    });
            }
        }
    }

    setListWithRanking(res, overall) {
        // console.log(res);
        if(overall) {
            res.forEach(element => {
                element.semester = {
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
                element.semester.percentage = ((element.semester.total_marks*100)/element.semester.max_marks) || 0;
                element.semester.credit_percentage = ((element.semester.total_credit_marks*100)/element.semester.max_credit_marks) || 0;
            });
        }
        
        this.fullList = res.sort((a, b) => {
            let aMarks = a.semester.percentage;
            let bMarks = b.semester.percentage;
            return (aMarks < bMarks? 1: (aMarks > bMarks? -1: 0));
        });
        let rank = 1, lag = 0;
        for(let i=0; i<this.fullList.length; i++) {
            // subject highest
            if(!overall) {
                this.fullList[i].semester.subjects.forEach(sub => {
                    this.subjectHighest[sub.paper_id] = Math.max(this.subjectHighest[sub.paper_id] || 0, sub.marks);
                });
            }
            // rankings
            if (i==0)
                this.fullList[i].rank = 1;
            else if (this.fullList[i-1].semester.percentage === this.fullList[i].semester.percentage) {
                this.fullList[i].rank = rank;
                ++lag;
            }
            else {
                rank += lag;
                this.fullList[i].rank = ++rank;
                lag = 0;
            }
        }
        // console.log(this.fullList);
        if(this.fullList.length > 0 && this.fullList[0].semester.max_marks === 0) {
            this.list = [];
        } else {
            this.list = this.fullList.slice();
        }
    }


    rowClicked(index) {
        let emittedModalData = {
            student: this.list[index],
            metadata: {
                subjectHighest: this.subjectHighest
            }
        };
        // this.listService.rowSelected(this.list[index]);
        this.listService.rowSelected(emittedModalData);
    }

    onSearch(e) {
        let str = e.srcElement.value.toUpperCase();
        this.list = this.fullList.filter(banda => (banda.name.includes(str) || banda.enroll_no.includes(str)));
    }
}
