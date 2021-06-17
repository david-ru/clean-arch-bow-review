import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewListComponent } from './templates/review-list/review-list.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }