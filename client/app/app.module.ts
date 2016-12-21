import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from'./app-routing.module'

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { PackageScheduleComponent }  from './components/package-schedule.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent,  PackageScheduleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }