import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from './components/home.component'
import {PackageScheduleComponent} from './components/package-schedule.component'

const appRoutes:Routes = [
  {
    path : 'package/schedule',
    component : PackageScheduleComponent
  },
  {
    path : '**',
    component : HomeComponent
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}