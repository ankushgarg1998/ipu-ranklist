import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bca-ranklist',
    templateUrl: './bca-ranklist.component.html',
    styleUrls: ['./bca-ranklist.component.css']
})
export class BcaRanklistComponent implements OnInit {
    defaultSelection = {
        college: 'MSI',
        batch: '17',
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
