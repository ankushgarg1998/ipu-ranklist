import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListService } from '../list.service';

import * as allSubjects from '../../shared/subjects.json';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    banda = {};
    subjectHighest = {};
    showMinorMajor = false;
    showCreditMarks = false;
    allTheSubjects = allSubjects;
    overall = false;
    @ViewChild('modalButton') modalButton: ElementRef;
    
    constructor(private listService: ListService) { }
    
    ngOnInit() {
        this.listService.rowSelectedEvent
        .subscribe(modalData => {
            let banda = modalData.student;
            this.subjectHighest = modalData.metadata.subjectHighest;
            this.modalButton.nativeElement.click();
            if(banda.semester.subjects) {
                this.overall = false;
                banda.semester.subjects = banda.semester.subjects.map(subj => {
                    subj.name = this.allTheSubjects['default'][subj.paper_id] || `paper_id(${subj.paper_id})`;
                    return subj;
                });
            } else {
                this.overall = true;
            }
            // console.log(banda);
            this.banda = banda;
        });
    }
    
}
