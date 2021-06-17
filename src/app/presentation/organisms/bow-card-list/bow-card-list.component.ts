import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BowModel } from "../../../core/domain/bow.model";
import { GetAllBowsUsecase } from "../../../core/usecases/get-all-bows.usecase";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: "cab-or-bow-card-list",
  templateUrl: "./bow-card-list.component.html",
  styleUrls: ["./bow-card-list.component.scss"],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class BowCardListComponent implements OnInit, OnChanges {
  @Input() filterValue: string;

  columnNames = [
    "company",
    "name",
    "design",
    "drawWeight",
    "points",
    "priceValue",
    "price"
  ];
  bows: Array<BowModel>;

  expandedElement: BowModel | null;

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<BowModel>;

  constructor(private getAllBows: GetAllBowsUsecase) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyFilter(changes.filterValue.currentValue);
  }

  ngOnInit() {
    this.bows = [];
    this.getAllBows.execute(null).subscribe((value: BowModel) => {
      this.bows.push(value);
      this.dataSource = new MatTableDataSource(this.bows);
    });
  }

  ngAfterViewInit() {
    this.configureTableDataSource();
  }

  onRowClick(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  applyFilter(value: string) {
    if (this.dataSource) {
      this.dataSource.filter = value.trim().toLowerCase();
    }
  }

  private configureTableDataSource() {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.informationFromManufacturer.company.toLocaleLowerCase().includes(filter) ||
        data.informationFromManufacturer.name.toLocaleLowerCase().includes(filter) ||
        data.informationFromManufacturer.design.toLocaleLowerCase().includes(filter) ||
        data.informationFromManufacturer.drawWeight.toString().toLocaleLowerCase().includes(filter) ||
        data.points.toString().toLocaleLowerCase().includes(filter) ||
        data.priceValue.toString().toLocaleLowerCase().includes(filter) ||
        data.informationFromManufacturer.price.toString().toLocaleLowerCase().includes(filter);
    };

    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'company': return item.informationFromManufacturer.company;
        case 'name': return item.informationFromManufacturer.name;
        case 'design': return item.informationFromManufacturer.design;
        case 'drawWeight': return item.informationFromManufacturer.drawWeight;
        case 'points': return item.points;
        case 'priceValue': return item.priceValue;
        case 'price': return item.informationFromManufacturer.price;
        default: return item[property];
      }
    };
  }

}
