import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../core/core.module";
import { DataModule } from "../../data/data.module";
import { ProgressBarSectionsComponent } from "./progress-bar-sections/progress-bar-sections.component";
import { FilterComponent } from './filter/filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule, 
    CoreModule, 
    DataModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    ProgressBarSectionsComponent,
    FilterComponent
  ],
  exports: [
    ProgressBarSectionsComponent,
    FilterComponent
  ],
  providers: []
})
export class AtomsModule {}
