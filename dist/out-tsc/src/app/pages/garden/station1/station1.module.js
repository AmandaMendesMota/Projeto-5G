"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_module_1 = require("../../../@theme/theme.module");
var ngx_echarts_1 = require("ngx-echarts");
var station1_component_1 = require("./station1.component");
var temperature_component_1 = require("./temperature/temperature.component");
var temperature_dragger_component_1 = require("./temperature/temperature-dragger/temperature-dragger.component");
var Station1Module = /** @class */ (function () {
    function Station1Module() {
    }
    Station1Module = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                ngx_echarts_1.NgxEchartsModule,
            ],
            declarations: [
                temperature_component_1.TemperatureComponent,
                temperature_dragger_component_1.TemperatureDraggerComponent,
                station1_component_1.Station1Component
            ],
        })
    ], Station1Module);
    return Station1Module;
}());
exports.Station1Module = Station1Module;
//# sourceMappingURL=station1.module.js.map