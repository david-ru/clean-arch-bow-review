import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../core/core.module";
import { DataModule } from "../../data/data.module";
import { AtomsModule } from "../atoms/atoms.module";
import { MoleculesModule } from "../molecules/molecules.module";
import { BowCardListComponent } from "./bow-card-list/bow-card-list.component";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule, 
    CoreModule, 
    DataModule, 
    AtomsModule, 
    MoleculesModule, 
    MatTableModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatDividerModule,
    PipesModule,
    MatGridListModule,
  ],
  declarations: [BowCardListComponent],
  exports: [AtomsModule, MoleculesModule, BowCardListComponent],
  providers: []
})
export class OrganismsModule {}
