import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as allCourses from '../../shared/courses.json';
import * as allInstis from '../../shared/institutes.json';
import { Router } from '@angular/router';

@Component({
    selector: 'app-listform',
    templateUrl: './listform.component.html',
    styleUrls: ['./listform.component.css']
})
export class ListformComponent implements OnInit {
    courses = [];
    instis = [];
    @Input() selections;
    @ViewChild('f') ngForm: NgForm;
    
    constructor(private router: Router) { }
    
    ngOnInit() {
        this.courses = allCourses['default'];
        this.instis = allInstis['default'];
    }

    onSearch() {
        this.router.navigate(['/ranklist'], {queryParams: this.ngForm.value});
    }

    fetchCollegeName(abbrev) {
        return this.instis.filter(insti => insti.abbrev === abbrev)[0].name;
    }

    fetchBranchName(abbrev) {
        return this.courses.filter(course => course.branch === abbrev)[0].name;
    }
    
}
