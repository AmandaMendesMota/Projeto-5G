"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_chartjs_1 = require("angular2-chartjs");
var ngx_echarts_1 = require("ngx-echarts");
var theme_module_1 = require("../../@theme/theme.module");
var dashboard_component_1 = require("./dashboard.component");
var status_card_component_1 = require("./status-card/status-card.component");
var contacts_component_1 = require("./contacts/contacts.component");
var rooms_component_1 = require("./rooms/rooms.component");
var room_selector_component_1 = require("./rooms/room-selector/room-selector.component");
var temperature_component_1 = require("./temperature/temperature.component");
var temperature_dragger_component_1 = require("./temperature/temperature-dragger/temperature-dragger.component");
var team_component_1 = require("./team/team.component");
var kitten_component_1 = require("./kitten/kitten.component");
var security_cameras_component_1 = require("./security-cameras/security-cameras.component");
var electricity_component_1 = require("./electricity/electricity.component");
var electricity_chart_component_1 = require("./electricity/electricity-chart/electricity-chart.component");
var weather_component_1 = require("./weather/weather.component");
var solar_component_1 = require("./solar/solar.component");
var player_component_1 = require("./rooms/player/player.component");
var chartjs_bar_horizontal_component_1 = require("./rooms/chart/chartjs-bar-horizontal.component");
var traffic_component_1 = require("./traffic/traffic.component");
var traffic_chart_component_1 = require("./traffic/traffic-chart.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                angular2_chartjs_1.ChartModule,
                ngx_echarts_1.NgxEchartsModule,
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                status_card_component_1.StatusCardComponent,
                temperature_dragger_component_1.TemperatureDraggerComponent,
                contacts_component_1.ContactsComponent,
                room_selector_component_1.RoomSelectorComponent,
                temperature_component_1.TemperatureComponent,
                rooms_component_1.RoomsComponent,
                team_component_1.TeamComponent,
                kitten_component_1.KittenComponent,
                security_cameras_component_1.SecurityCamerasComponent,
                electricity_component_1.ElectricityComponent,
                electricity_chart_component_1.ElectricityChartComponent,
                weather_component_1.WeatherComponent,
                player_component_1.PlayerComponent,
                solar_component_1.SolarComponent,
                traffic_component_1.TrafficComponent,
                traffic_chart_component_1.TrafficChartComponent,
                chartjs_bar_horizontal_component_1.ChartjsBarHorizontalComponent,
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map