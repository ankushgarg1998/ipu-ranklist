import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import * as allInstis from '../../shared/institutes-bba.json';
import * as allBranches from '../../shared/courses-bba.json';

@Component({
    selector: 'app-bba-listform',
    templateUrl: './bba-listform.component.html',
    styleUrls: ['./bba-listform.component.css']
})
export class BbaListformComponent implements OnInit {

    courses = [];
    instis = [];
    branches = [];
    @Input() selections: any;
    @ViewChild('f') ngForm: NgForm;

    constructor(private router: Router) { }

    ngOnInit() {
        this.instis = allInstis['default'];
        this.branches = allBranches['default'];
    }

    onSearch() {
        this.router.navigate(['/bba-ranklist'], { queryParams: this.ngForm.value });
    }

    fetchCollegeName(abbrev) {
        return this.instis.filter(insti => insti.abbrev === abbrev)[0].name;
    }

    fetchBranchName(abbrev) {
        return this.branches.filter(branch => branch.branch === abbrev)[0].name;
    }

}
