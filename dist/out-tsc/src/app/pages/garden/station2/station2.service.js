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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var app_api_1 = require("../../../app.api");
var Station2Service = /** @class */ (function () {
    function Station2Service(http) {
        this.http = http;
    }
    Station2Service.prototype.temperatures = function () {
        console.log(this.http.get(app_api_1.API + "/station2"));
        return this.http.get(app_api_1.API + "/station2");
    };
    Station2Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], Station2Service);
    return Station2Service;
}());
exports.Station2Service = Station2Service;
//classe que acessa o backend
//# sourceMappingURL=station2.service.js.map