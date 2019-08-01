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
    showMinorMajor = false;
    allTheSubjects = allSubjects;
    @ViewChild('modalButton') modalButton: ElementRef;
    
    constructor(private listService: ListService) { }
    
    ngOnInit() {
        this.listService.rowSelectedEvent
        .subscribe(banda => {
            this.modalButton.nativeElement.click();
            banda.semester.subjects = banda.semester.subjects.map(subj => {
                subj.name = this.allTheSubjects['default'][subj.paper_id] || `paper_id(${subj.paper_id})`;
                return subj;
            });
            // console.log(banda);
            this.banda = banda;
        });
    }
    
}
