"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./services/task.service');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.name = 'Angular';
        this.form_value = {};
        this.data = ["some"];
    }
    AppComponent.prototype.callApi = function (event) {
        var _this = this;
        this.taskService.getData().subscribe(function (data) { _this.data = data; }, function (err) { return console.info(err); });
    };
    AppComponent.prototype.callSubmit = function (values, is_valid) {
        console.log(values);
        console.log(is_valid);
        if (is_valid) {
            this.form_value = values;
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
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
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [task_service_1.TaskService],
            styles: ["\n      .secondary.pointing.menu .toc.item {\n        display: none;\n      }\n\n      @media only screen and (max-width: 700px) {\n        .secondary.pointing.menu .item,\n        .secondary.pointing.menu .menu {\n          display: none;\n        }\n        .secondary.pointing.menu .toc.item {\n          display: block;\n        }\n      }\n  "
            ]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map