"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var station1_component_1 = require("./station1/station1.component");
var station2_component_1 = require("./station2/station2.component");
var station3_component_1 = require("./station3/station3.component");
var garden_component_1 = require("./garden.component");
var routes = [{
        path: '',
        component: garden_component_1.GardenComponent,
        children: [{
                path: 'station1',
                component: station1_component_1.Station1Component
            },
            { path: 'station2',
                component: station2_component_1.Station2Component },
            { path: 'station3',
                component: station3_component_1.Station3Component
            }],
    }];
;
var GardenRoutingModule = /** @class */ (function () {
    function GardenRoutingModule() {
    }
    GardenRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], GardenRoutingModule);
    return GardenRoutingModule;
}());
exports.GardenRoutingModule = GardenRoutingModule;
//# sourceMappingURL=garden-routing.module.js.map