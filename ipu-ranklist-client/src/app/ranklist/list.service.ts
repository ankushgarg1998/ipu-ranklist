import { EventEmitter } from '@angular/core';

export class ListService {
    rowSelectedEvent = new EventEmitter<any>();

    rowSelected(modalData) {
        this.rowSelectedEvent.emit(modalData);
    }
}