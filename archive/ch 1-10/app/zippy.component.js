System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.title = "Default title";
                    this.isExpanded = false;
                }
                ZippyComponent.prototype.onClick = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: "zippy",
                        template: "\n    <div class=\"panel panel-default zippy\">\n      <div class=\"panel-heading\" (click)=\"onClick()\">\n        <h3 class=\"panel-title\">\n          {{ title }}\n          <span class=\"glyphicon pull-right\"\n                [ngClass]=\"{\n                  'glyphicon-chevron-up': isExpanded,\n                  'glyphicon-chevron-down': !isExpanded\n                }\"\n          ></span>\n        </h3>\n      </div>\n      <div class=\"panel-body\" *ngIf=\"isExpanded\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .zippy {padding:0px;margin:0px;}\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map