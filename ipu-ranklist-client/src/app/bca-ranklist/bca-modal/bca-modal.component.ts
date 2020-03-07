import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BcaListService } from '../bca-list.service';

import * as allSubjects from '../../shared/subjects.json';

@Component({
  selector: 'app-bca-modal',
  templateUrl: './bca-modal.component.html',
  styleUrls: ['./bca-modal.component.css']
})
export class BcaModalComponent implements OnInit {
  banda = {};
  showMinorMajor = false;
  showCreditMarks = false;
  allTheSubjects = allSubjects;
  overall = false;
  @ViewChild('modalButton') modalButton: ElementRef;
  
  constructor(private listService: BcaListService) { }
  
  ngOnInit() {
      this.listService.rowSelectedEvent
      .subscribe(banda => {
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
