import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { HttpResponse } from '@angular/common/http';
import { ListService } from '../shared/list.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
    fullList= [];
    list = [];
    @Input() selections = {};
    
    constructor(private modelService: ModelService, private listService: ListService) { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['selections']) {
            let keys = Object.keys(this.selections);
            if(keys.includes('college') && keys.includes('shift') && keys.includes('batch') && keys.includes('branch') && keys.includes('sem')) {
                this.modelService.getList(this.selections['college'], this.selections['shift'], this.selections['batch'], this.selections['branch'], this.selections['sem'])
                    .subscribe((res: any[]) => {
                        console.log(res);
                        this.fullList = res.sort((a, b) => {
                            let aMarks = a.semesters[0].total_marks;
                            let bMarks = b.semesters[0].total_marks;
                            return (aMarks < bMarks? 1: (aMarks > bMarks? -1: 0));
                        });
                        let rank = 1;
                        // for(let i=0; i<this.fullList.length; i++) {
                        //     if(i>0 && this.fullList[i-1].
                        //     this.fullList[i].rank = rank;
                        // }
                        this.list = this.fullList.slice();
                    });
            }
        }
    }

    rowClicked(index) {
        this.list[index]['rank'] = index;
        this.listService.rowSelected(this.list[index]);
    }

    onSearch(e) {
        let str = e.srcElement.value.toUpperCase();
        this.list = this.fullList.filter(banda => (banda.name.includes(str) || banda.enroll_no.includes(str)));
    }
}
