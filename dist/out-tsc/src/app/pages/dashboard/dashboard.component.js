"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var theme_1 = require("@nebular/theme");
var takeWhile_1 = require("rxjs/operators/takeWhile");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.lightCard = {
            title: 'Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.rollerShadesCard = {
            title: 'Roller Shades',
            iconClass: 'nb-roller-shades',
            type: 'success',
        };
        this.wirelessAudioCard = {
            title: 'Wireless Audio',
            iconClass: 'nb-audio',
            type: 'info',
        };
        this.coffeeMakerCard = {
            title: 'Coffee Maker',
            iconClass: 'nb-coffee-maker',
            type: 'warning',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
            this.rollerShadesCard,
            this.wirelessAudioCard,
            this.coffeeMakerCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                __assign({}, this.lightCard, { type: 'warning' }),
                __assign({}, this.rollerShadesCard, { type: 'primary' }),
                __assign({}, this.wirelessAudioCard, { type: 'danger' }),
                __assign({}, this.coffeeMakerCard, { type: 'secondary' }),
            ],
        };
        this.themeService.getJsTheme()
            .pipe(takeWhile_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.statusCards = _this.statusCardsByThemes[theme.name];
        });
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dashboard',
            styleUrls: ['./dashboard.component.scss'],
            templateUrl: './dashboard.component.html',
        }),
        __metadata("design:paramtypes", [theme_1.NbThemeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map