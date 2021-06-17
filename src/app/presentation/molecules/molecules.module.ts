import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../core/core.module";
import { DataModule } from "../../data/data.module";
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule, 
    CoreModule, 
    DataModule, 
    AtomsModule,
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class MoleculesModule { }