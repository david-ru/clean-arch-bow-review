import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SentencecasePipe } from './sentence-case/sentence-case.pipe';
import { FirstCasePipe } from './first-case/first-case.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SentencecasePipe, FirstCasePipe],
  exports: [SentencecasePipe, FirstCasePipe],
  providers: []
})
export class PipesModule {}
