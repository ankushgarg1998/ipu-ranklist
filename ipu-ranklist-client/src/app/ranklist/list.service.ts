import { EventEmitter } from '@angular/core';

export class ListService {
    rowSelectedEvent = new EventEmitter<any>();

    rowSelected(banda) {
        this.rowSelectedEvent.emit(banda);
    }
}