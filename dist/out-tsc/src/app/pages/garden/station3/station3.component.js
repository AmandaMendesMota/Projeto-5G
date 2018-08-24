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
var station3_service_1 = require("./station3.service");
var Station3Component = /** @class */ (function () {
    function Station3Component(station1Service) {
        this.station1Service = station1Service;
    } //declarando uma propriedade
    Station3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.station1Service.temperatures()
            .subscribe(function (temperatures) { return _this.temperatures = temperatures; });
    };
    Station3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ngx-station3',
            templateUrl: './station3.component.html',
        }),
        __metadata("design:paramtypes", [station3_service_1.Station3Service])
    ], Station3Component);
    return Station3Component;
}());
exports.Station3Component = Station3Component;
//# sourceMappingURL=station3.component.js.map