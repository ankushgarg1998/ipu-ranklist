import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as allInstis from '../../shared/institutes-bca.json';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bca-listform',
    templateUrl: './bca-listform.component.html',
    styleUrls: ['./bca-listform.component.css']
})
export class BcaListformComponent implements OnInit {

    courses = [];
    instis = [];
    @Input() selections: any;
    @ViewChild('f') ngForm: NgForm;

    constructor(private router: Router) { }

    ngOnInit() {
        this.instis = allInstis['default'];
    }

    onSearch() {
        this.router.navigate(['/bca-ranklist'], {queryParams: this.ngForm.value});
    }

    fetchCollegeName(abbrev) {
        return this.instis.filter(insti => insti.abbrev === abbrev)[0].name;
    }

}
