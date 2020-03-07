import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ModelService } from '../../shared/model.service';
import { BcaListService } from '../bca-list.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-bca-table',
    templateUrl: './bca-table.component.html',
    styleUrls: ['./bca-table.component.css']
})
export class BcaTableComponent implements OnInit, OnChanges {
    fullList = [];
    list = [];
    @Input() selections;
    @Output() rowSelectedEvent = new EventEmitter<any>();
    isDataPresent = false;

    constructor(private modelService: ModelService, private bcaListService: BcaListService, private spinner: NgxSpinnerService) { }

    ngOnInit() {
        // console.log(this.selections);
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['selections']) {
            let keys = Object.keys(this.selections);
            if(keys.includes('college') && keys.includes('batch') && keys.includes('sem')) {
                this.list = [];
                this.spinner.show();
                this.modelService.getBcaList(this.selections['college'], this.selections['batch'], this.selections['sem'])
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
                element.semester.percentage = (element.semester.total_marks*100)/element.semester.max_marks;
                element.semester.credit_percentage = (element.semester.total_credit_marks*100)/element.semester.max_credit_marks;
            });
        }
        
        this.fullList = res.sort((a, b) => {
            let aMarks = a.semester.percentage;
            let bMarks = b.semester.percentage;
            return (aMarks < bMarks? 1: (aMarks > bMarks? -1: 0));
        });
        let rank = 1, lag = 0;
        for(let i=0; i<this.fullList.length; i++) {
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
        if(this.fullList.length > 0 && this.fullList[0].semester.max_marks === 0) {
            this.list = [];
        } else {
            this.list = this.fullList.slice();
        }
    }


    rowClicked(index) {
        this.bcaListService.rowSelected(this.list[index]);
    }

    onSearch(e) {
        let str = e.srcElement.value.toUpperCase();
        this.list = this.fullList.filter(banda => (banda.name.includes(str) || banda.enroll_no.includes(str)));
    }

}
