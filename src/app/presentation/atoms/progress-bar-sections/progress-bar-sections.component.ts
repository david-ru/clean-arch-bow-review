import { Component, Input, OnInit } from "@angular/core";

const DEFAULT_COLOR = "#55eb34";

@Component({
  selector: "cab-at-progress-bar-sections",
  templateUrl: "./progress-bar-sections.component.html",
  styleUrls: ["./progress-bar-sections.component.scss"]
})

export class ProgressBarSectionsComponent implements OnInit {
  @Input() sections: Array<string> = [DEFAULT_COLOR];
  @Input() amountFull: number = 0;

  public remaining: Number;

  constructor() { }

  ngOnInit() {
    this.remaining = 100 - this.amountFull;
  }

}
