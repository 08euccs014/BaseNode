import { Component } from "@angular/core"
import { AfterViewInit}  from '@angular/core';
import { OnDestroy}  from '@angular/core';

declare var jQuery:any;


@Component ({
    moduleId : module.id,
    selector : 'home',
    templateUrl : 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements AfterViewInit {
    ngAfterViewInit() : void 
    {
        jQuery('.main-menu').hide();
        // // // fix menu when passed
        // jQuery('.masthead').visibility(
        // {
        //     once: false,
        //     onBottomPassed: function() {
        //         jQuery('.fixed.menu').transition('fade in');
        //     },
        //     onBottomPassedReverse: function() {
        //         jQuery('.fixed.menu').transition('fade out');
        //     }
        // });

        // create sidebar and attach to menu open
        jQuery('.ui.sidebar').sidebar('attach events', '.toc.item');

        console.log('Y oconmpoent is load');
    }

    ngOnDestroy() : void {
        jQuery('.main-menu').show();
    }
}