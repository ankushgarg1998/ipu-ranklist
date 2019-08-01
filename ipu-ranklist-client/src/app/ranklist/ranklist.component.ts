import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ranklist',
    templateUrl: './ranklist.component.html',
    styleUrls: ['./ranklist.component.css']
})
export class RanklistComponent implements OnInit {
    selection = {
        college: 'MSIT',
        shift: 'M',
        batch: '16',
        branch: 'CSE',
        sem: '5'
    };
    
    constructor() { }
    
    ngOnInit() {
    }
    
}
