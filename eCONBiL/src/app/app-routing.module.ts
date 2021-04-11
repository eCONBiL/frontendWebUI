import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component'
import { NewComponent } from './new/new.component'
import { ChangeComponent } from './change/change.component'
import { AboutComponent } from './about/about.component'
import { CreateSuccessComponent } from './create-success/create-success.component';
import { SharedOverviewComponent } from './shared-overview/shared-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent },
  { path: 'newBillOfLading', component: NewComponent },
  { path: 'changeBillOfLading', component: ChangeComponent },
  { path: 'overviewSingleBL/:blNumber', component: SharedOverviewComponent},
  { path: 'about', component: CreateSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
