import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bca-ranklist',
  templateUrl: './bca-ranklist.component.html',
  styleUrls: ['./bca-ranklist.component.css']
})
export class BcaRanklistComponent implements OnInit {
  selection = {
      college: 'MSI',
      batch: '17',
      sem: '0'
  };
  newSelection = {};

  constructor() { }

  ngOnInit() {
  }

}
