import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
    list= [];
    @Input() selections = {};
    
    constructor(private modelService: ModelService) { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['selections']) {
            let keys = Object.keys(this.selections);
            if(keys.includes('college') && keys.includes('shift') && keys.includes('batch') && keys.includes('branch') && keys.includes('sem')) {
                this.modelService.getList(this.selections['college'], this.selections['shift'], this.selections['batch'], this.selections['branch'], this.selections['sem'])
                    .subscribe((res: any[]) => {
                        // console.log(res);
                        this.list = res.sort((a, b) => {
                            let aMarks = a.semesters[0].total_marks;
                            let bMarks = b.semesters[0].total_marks;
                            return (aMarks < bMarks? 1: (aMarks > bMarks? -1: 0));
                        });
                    });
            }
        }
    }
}
