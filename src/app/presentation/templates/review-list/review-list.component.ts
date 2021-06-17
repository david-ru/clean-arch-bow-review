import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cab-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() filterValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event) {
    this.filterValue = event;
  }

}
