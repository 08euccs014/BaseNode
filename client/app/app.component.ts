import { Component } from '@angular/core';
import { TaskService } from './services/task.service'
import { AfterViewInit}  from '@angular/core';

declare var jQuery:any;

@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [TaskService],
  styles : [`
      .secondary.pointing.menu .toc.item {
        display: none;
      }

      @media only screen and (max-width: 700px) {
        .secondary.pointing.menu .item,
        .secondary.pointing.menu .menu {
          display: none;
        }
        .secondary.pointing.menu .toc.item {
          display: block;
        }
      }
  `
  ]
})
export class AppComponent implements AfterViewInit
{ 
  name = 'Angular';
  form_value = {};
  data: string[] = ["some"]; 

  constructor(private taskService : TaskService){}

  callApi(event : any): void {

    this.taskService.getData().subscribe(data => {this.data = data}, err => console.info(err));
  }

  callSubmit(values : any, is_valid : boolean): void {
    console.log(values);
    console.log(is_valid);
    if(is_valid){
      this.form_value = values;
    }
  }

  ngAfterViewInit() : void 
  {
    //jQuery('.main-menu').show();
    // fix menu when passed
    // jQuery('.masthead').visibility(
    // {
    //   once: false,
    //   onBottomPassed: function() {
    //     jQuery('.fixed.menu').transition('fade in');
    //   },
    //   onBottomPassedReverse: function() {
    //     jQuery('.fixed.menu').transition('fade out');
    //   }
    // });

    // create sidebar and attach to menu open
    jQuery('.ui.sidebar').sidebar('attach events', '.toc.item');
  }
}