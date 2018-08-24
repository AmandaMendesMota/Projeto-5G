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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var station1_service_1 = require("./station1.service");
var Station1Component = /** @class */ (function () {
    function Station1Component(station1Service) {
        this.station1Service = station1Service;
    } //declarando uma propriedade
    Station1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.station1Service.temperatures()
            .subscribe(function (temperatures) { return _this.temperatures = temperatures; });
        console.log(this.station1Service.temperatures());
    };
    Station1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ngx-station1',
            templateUrl: './station1.component.html',
        }),
        __metadata("design:paramtypes", [station1_service_1.Station1Service])
    ], Station1Component);
    return Station1Component;
}());
exports.Station1Component = Station1Component;
//# sourceMappingURL=station1.component.js.map