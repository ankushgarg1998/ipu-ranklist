import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    college: string = 'msitM';
    batch: string = '16';
    branch: string = 'cse';
    sem: string = '5';
    
    constructor() { }
    
    ngOnInit() {
    }
    
}
