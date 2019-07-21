import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as allCourses from '../shared/courses.json';
import * as allInstis from '../shared/institutes.json';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    courses = [];
    instis = [];
    defaultSelection = {
        college: 'MSIT',
        shift: 'M',
        batch: '16',
        branch: 'CSE',
        sem: '5'
    }
    @ViewChild('f') ngForm: NgForm;
    @Output() selectionsChanged = new EventEmitter<object>();
    
    constructor() { }
    
    ngOnInit() {
        this.courses = allCourses['default'];
        this.instis = allInstis['default'];
        this.ngForm.form.valueChanges.subscribe(x => {
            // console.log(x);
            this.selectionsChanged.emit(x);
        })
    }
    
}
