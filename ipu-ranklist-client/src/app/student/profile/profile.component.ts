import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModelService } from 'src/app/shared/model.service';

import * as allCourses from '../../shared/courses.json';
import * as allInstis from '../../shared/institutes.json';
import * as allSubjects from '../../shared/subjects.json';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    enroll: string;
    student: any;
    validStudent = false;
    selectedSem = 1;
    showMinorMajor = false;

    constructor(private route: ActivatedRoute, private modelService: ModelService) { }
    
    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.enroll = params['enroll'];
                this.modelService.getStudent(this.enroll)
                    .subscribe((data: Array<any>) => {
                        if(data.length === 0) {
                            this.validStudent = false;
                            this.student = {};
                        } else {
                            this.validStudent = true;
                            this.student = data[0];
                            console.log(this.student);
                        }
                    })
            })
    }

    findCollegeName(code) {
        console.log(code);
        let institute = allInstis.filter(insti => (insti.code === code || insti.codeEve === code));
        console.log(institute);
        return institute[0]['name'];
    }
    
}
