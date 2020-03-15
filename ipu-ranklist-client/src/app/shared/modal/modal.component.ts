import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EventService } from '../event.service';

import * as allTheSubjects from '../subjects.json';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    student = {};
    subjectBest = {};
    semesterBest = {};
    showInternalExternal = false;
    showCreditMarks = false;
    allSubjects = allTheSubjects['default'];
    overall = false;
    @ViewChild('modalButton') modalButton: ElementRef;

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.rowSelectedEvent
            .subscribe(modalData => {
                let tempStudent = modalData.student;
                this.subjectBest = modalData.metadata.subjectBest;
                this.modalButton.nativeElement.click();
                this.addSubjectNamesToStudentObj(tempStudent);
                this.student = tempStudent;
            });
    }

    addSubjectNamesToStudentObj(student) {
        if (student.semester.subjects) {
            this.overall = false;
            student.semester.subjects = student.semester.subjects.map(subj => {
                subj.name = this.allSubjects[subj.paper_id] || `paper_id(${subj.paper_id})`;
                return subj;
            });
        } else {
            this.overall = true;
        }
    }

}
