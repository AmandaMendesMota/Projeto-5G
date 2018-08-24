"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var garden_routing_module_1 = require("./garden-routing.module");
var garden_component_1 = require("./garden.component");
var station1_module_1 = require("./station1/station1.module");
var station2_module_1 = require("./station2/station2.module");
var station3_module_1 = require("./station3/station3.module");
var PAGES_COMPONENTS = [
    garden_component_1.GardenComponent,
];
var GardenModule = /** @class */ (function () {
    function GardenModule() {
    }
    GardenModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                garden_routing_module_1.GardenRoutingModule,
                station1_module_1.Station1Module,
                station2_module_1.Station2Module,
                station3_module_1.Station3Module
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], GardenModule);
    return GardenModule;
}());
exports.GardenModule = GardenModule;
//# sourceMappingURL=garden.module.js.map