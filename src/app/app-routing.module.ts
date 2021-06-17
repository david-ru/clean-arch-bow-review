import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BowCardListComponent } from './presentation/organisms/bow-card-list/bow-card-list.component';
import { ReviewListComponent } from './presentation/templates/review-list/review-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./presentation/templates/templates.module').then(m => m.TemplatesModule) },
  // { path: 'main', component:  ReviewListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
