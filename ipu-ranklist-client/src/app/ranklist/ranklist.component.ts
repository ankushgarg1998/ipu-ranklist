import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-ranklist',
    templateUrl: './ranklist.component.html',
    styleUrls: ['./ranklist.component.css']
})
export class RanklistComponent implements OnInit {
    defaultSelection = {
        college: 'MSIT',
        shift: 'M',
        batch: '16',
        branch: 'CSE',
        sem: '0'
    };
    selection = {};
    newSelection = {};

    constructor(private route: ActivatedRoute) { }
    
    ngOnInit() {
        this.route.queryParams
            .subscribe((params: any) => {
                this.newSelection = params;
                if(Object.keys(params).length === 0)
                    this.selection = this.defaultSelection;
                else
                    this.selection = params;
            });
    }
}
