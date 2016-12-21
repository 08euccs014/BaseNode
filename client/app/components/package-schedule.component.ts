import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'package-schedule',
  templateUrl: 'package-schedule.component.html',
})
export class PackageScheduleComponent
{

  form_value = {'sfksf' : 2};

  //Save Pickup address in some global varialbe so we could start a session and manage into it.
  savePickup(values : any, is_valid : boolean): void 
  {
    //TODO: call service api or save it in cache
    if(is_valid){
      
    }else {
      //TODO: pending validation
      alert('Please enter the valid values');
    }
  }

}