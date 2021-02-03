import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component'
import { NewComponent } from './new/new.component'
import { ChangeComponent } from './change/change.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent },
  { path: 'newBillOfLading', component: NewComponent },
  { path: 'changeBillOfLading', component: ChangeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
