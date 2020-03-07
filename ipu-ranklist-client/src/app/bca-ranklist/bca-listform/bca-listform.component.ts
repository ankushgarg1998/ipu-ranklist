import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as allInstis from '../../shared/institutes-bca.json';

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
    @Output() selectionsChanged = new EventEmitter<object>();

    constructor() { }

    ngOnInit() {
        this.instis = allInstis['default'];
        // this.ngForm.form.valueChanges.subscribe(x => {
        //     console.log('a', x);
        //     console.log('b', this.ngForm.value);
        //     this.selectionsChanged.emit(x);
        // });
    }

    onSearch() {
        // console.log('clicked');
        // console.log(this.ngForm.value);
        this.selectionsChanged.emit(this.ngForm.value);
    }

}
