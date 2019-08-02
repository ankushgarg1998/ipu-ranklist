import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as allCourses from '../../shared/courses.json';
import * as allInstis from '../../shared/institutes.json';

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
    @Output() selectionsChanged = new EventEmitter<object>();
    
    constructor() { }
    
    ngOnInit() {
        this.courses = allCourses['default'];
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
