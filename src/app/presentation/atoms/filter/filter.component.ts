import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() keyReleased = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.keyReleased.emit(filterValue.trim().toLowerCase());
  }

}
