import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    
    constructor(private router: Router, private route: ActivatedRoute) { }
    
    ngOnInit() {
    }
    
    clicked(roll) {
        if(roll.length === 11) {
            this.router.navigate([roll], {relativeTo: this.route});
        }
    }
    
}
