import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { NewComponent } from './new/new.component';
import { ChangeComponent } from './change/change.component';
import { AboutComponent } from './about/about.component';
import { CreateSuccessComponent } from './create-success/create-success.component';
import { SharedOverviewComponent } from './shared-overview/shared-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NewComponent,
    ChangeComponent,
    AboutComponent,
    CreateSuccessComponent,
    SharedOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
