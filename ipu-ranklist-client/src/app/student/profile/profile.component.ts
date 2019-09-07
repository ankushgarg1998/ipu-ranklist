import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModelService } from 'src/app/shared/model.service';

import * as allCourses from '../../shared/courses.json';
import * as allInstis from '../../shared/institutes.json';
import * as allSubjects from '../../shared/subjects.json';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    enroll: string;
    student: any;
    validStudent = -1;
    selectedSem = 0;
    showMinorMajor = true;
    showCreditMarks = false;
    sems = [];
    
    constructor(private route: ActivatedRoute, private modelService: ModelService, private spinner: NgxSpinnerService) { }
    
    ngOnInit() {
        this.route.params
        .subscribe((params: Params) => {
            this.validStudent = 0;
            this.spinner.show();
            this.enroll = params['enroll'];
            this.modelService.getStudent(this.enroll)
            .subscribe((data: Array<any>) => {
                this.spinner.hide();
                if(data.length === 0) {
                    this.validStudent = -1;
                    this.student = {};
                } else {
                    this.validStudent = 1;
                    this.student = data[0];
                    console.log(this.student);
                    // Defining the limit on semesters
                    this.sems = [0];
                    this.student['semesters'].unshift({
                        total_marks: 0,
                        max_marks: 0,
                        percentage: 0,
                        total_credit_marks: 0,
                        max_credit_marks: 0,
                        credit_percentage: 0,
                        total_grade_points: 0,
                        max_credits: 0,
                        subjects: []
                    });
                    for(let i=1; i<=8; i++) {
                        if(this.student['semesters'][i].total_marks !== 0) {
                            this.sems.push(i);
                            this.student['semesters'][i]['subjects'] = this.student['semesters'][i]['subjects'].map(subj => {
                                subj.name = allSubjects['default'][subj.paper_id] || `paper_id(${subj.paper_id})`;
                                return subj;
                            });

                            this.student['semesters'][0].total_marks += this.student['semesters'][i].total_marks;
                            this.student['semesters'][0].max_marks += this.student['semesters'][i].max_marks;
                            this.student['semesters'][0].total_credit_marks += this.student['semesters'][i].total_credit_marks;
                            this.student['semesters'][0].max_credit_marks += this.student['semesters'][i].max_credit_marks;
                            this.student['semesters'][0].total_grade_points += this.student['semesters'][i].total_grade_points;
                            this.student['semesters'][0].max_credits += this.student['semesters'][i].max_credits;
                        }
                    }
                    this.student['semesters'][0].percentage = this.student['semesters'][0].total_marks*100 / this.student['semesters'][0].max_marks;
                    this.student['semesters'][0].credit_percentage = this.student['semesters'][0].total_credit_marks*100 / this.student['semesters'][0].max_credit_marks;
                    if(this.sems.length === 0)
                        this.validStudent = -1;
                    console.log(this.student);
                }
            })
        })
    }
    
    findCollegeName(code) {
        let institute = allInstis.filter(insti => (insti.code === code || insti.codeEve === code));
        return institute[0]['name'];
    }
    
    tabChange(sem) {
        this.selectedSem = sem;
    }
}
