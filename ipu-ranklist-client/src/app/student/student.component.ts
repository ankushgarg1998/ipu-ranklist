import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    public lottieConfig: Object;
    animJsons = [
        'batman',
        'flying-cat',
        'penguin',
        // 'karam'
    ];
    animIndex = Math.floor((Math.random() * (this.animJsons.length)));

    constructor(private router: Router, private route: ActivatedRoute) {
        this.lottieConfig = {
            path: `assets/anims/${this.animJsons[this.animIndex]}.json`,
            renderer: 'svg',
            autoplay: true,
            loop: true
        };
    }

    ngOnInit() {
    }

    clicked(roll) {
        if (roll.length === 11) {
            this.router.navigate([roll], { relativeTo: this.route });
        }
    }

}
