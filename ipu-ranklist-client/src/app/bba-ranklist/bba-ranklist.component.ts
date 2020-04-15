import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bba-ranklist',
    templateUrl: './bba-ranklist.component.html',
    styleUrls: ['./bba-ranklist.component.css']
})
export class BbaRanklistComponent implements OnInit {
    defaultSelection = {
        college: 'MSI',
        batch: '17',
        branch: 'G',
        sem: '0'
    };
    selection = {};
    newSelection = {};

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe((params: any) => {
                this.newSelection = params;
                if (Object.keys(params).length === 0)
                    this.selection = this.defaultSelection;
                else
                    this.selection = params;
            });
    }

}
