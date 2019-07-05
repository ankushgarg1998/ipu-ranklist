import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    college: string = 'msit';
    shift: string = 'M';
    batch = 16;
    branch: string = 'cse';
    sem = 5;
    list = [];
    
    constructor(private modelService: ModelService) { }
    
    ngOnInit() {
        this.modelService.getList(this.college, this.shift, this.batch, this.branch, this.sem)
            .subscribe((res: any[]) => {
                console.log(res);
                this.list = res;
            });
    }
    
}
