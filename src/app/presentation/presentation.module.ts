import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { DataModule } from "../data/data.module";
import { TemplatesModule } from './templates/templates.module';
import { PresentationRoutingModule } from './presentation.router.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule,
    TemplatesModule,
    PresentationRoutingModule,
  ],
  declarations: [],
  exports: [TemplatesModule],
  providers: []
})
export class PresentationModule {}
