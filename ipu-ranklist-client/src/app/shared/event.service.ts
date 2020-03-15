import { EventEmitter } from '@angular/core';

export class EventService {
    rowSelectedEvent = new EventEmitter<any>();

    rowSelected(modalData) {
        this.rowSelectedEvent.emit(modalData);
    }
}