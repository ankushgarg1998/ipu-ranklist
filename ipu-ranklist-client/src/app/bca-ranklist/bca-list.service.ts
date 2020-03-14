import { EventEmitter } from '@angular/core';

export class BcaListService {
    rowSelectedEvent = new EventEmitter<any>();

    rowSelected(banda) {
        this.rowSelectedEvent.emit(banda);
    }
}