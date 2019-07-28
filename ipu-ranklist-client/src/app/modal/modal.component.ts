import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListService } from '../shared/list.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    banda = {};
    showMinorMajor = false;
    @ViewChild('modalButton') modalButton: ElementRef;
    
    constructor(private listService: ListService) { }
    
    ngOnInit() {
        this.listService.rowSelectedEvent
        .subscribe(banda => {
            this.modalButton.nativeElement.click();
            console.log(banda);
            this.banda = banda;
        });
    }
    
}
