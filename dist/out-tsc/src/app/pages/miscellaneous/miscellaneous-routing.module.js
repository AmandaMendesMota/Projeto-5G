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
var miscellaneous_component_1 = require("./miscellaneous.component");
var not_found_component_1 = require("./not-found/not-found.component");
var routes = [{
        path: '',
        component: miscellaneous_component_1.MiscellaneousComponent,
        children: [{
                path: '404',
                component: not_found_component_1.NotFoundComponent,
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());
exports.MiscellaneousRoutingModule = MiscellaneousRoutingModule;
exports.routedComponents = [
    miscellaneous_component_1.MiscellaneousComponent,
    not_found_component_1.NotFoundComponent,
];
//# sourceMappingURL=miscellaneous-routing.module.js.map