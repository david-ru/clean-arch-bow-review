import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewListComponent } from './review-list/review-list.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesRoutingModule } from './templates.router.module';
import { AtomsModule } from "../atoms/atoms.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    OrganismsModule,
    TemplatesRoutingModule,
    AtomsModule,
    MatButtonModule
  ],
  declarations: [ReviewListComponent],
  exports: [OrganismsModule],
  providers: []
})
export class TemplatesModule {}