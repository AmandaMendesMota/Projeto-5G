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
var RoomSelectorComponent = /** @class */ (function () {
    function RoomSelectorComponent() {
        this.select = new core_1.EventEmitter();
        this.sortedRooms = [];
        this.viewBox = '20 0 450 400';
        this.isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
        this.roomSvg = {
            rooms: [
                {
                    id: '0',
                    name: { text: 'Station #1', x: 80, y: 140 },
                    area: { d: 'M 30 30 H 130 V 260 H 30 L 30 30' },
                    border: { d: 'M 30 30 H 130 V 260 H 30 L 30 30' },
                },
                {
                    id: '2',
                    name: { text: 'Station #2', x: 200, y: 140 },
                    area: { d: 'M 150 30 H 250 V 260 H 150 L 150 30' },
                    border: { d: 'M 150 30 H 250 V 260 H 150 L 150 30' },
                },
                {
                    id: '3',
                    name: { text: 'Station #3', x: 320, y: 140 },
                    area: { d: 'M 270 30 H 370 V 260 H 270 L 270 30' },
                    border: { d: 'M 270 30 H 370 V 260 H 270 L 270 30' },
                },
                {
                    id: '4',
                    name: { text: 'Reservoir', x: 200, y: 320 },
                    area: { d: 'M 50 290 H 350 V 350 H 50 L 50 290' },
                    border: { d: 'M 50 290 H 350 V 350 H 50 L 50 290' },
                },
            ],
        };
        this.selectRoom('2');
    }
    RoomSelectorComponent.prototype.sortRooms = function () {
        var _this = this;
        this.sortedRooms = this.roomSvg.rooms.slice(0).sort(function (a, b) {
            if (a.id === _this.selectedRoom) {
                return 1;
            }
            if (b.id === _this.selectedRoom) {
                return -1;
            }
            return 0;
        });
    };
    RoomSelectorComponent.prototype.selectRoom = function (roomNumber) {
        this.select.emit(roomNumber);
        this.selectedRoom = roomNumber;
        this.sortRooms();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RoomSelectorComponent.prototype, "select", void 0);
    RoomSelectorComponent = __decorate([
        core_1.Component({
            selector: 'ngx-room-selector',
            templateUrl: './room-selector.component.html',
            styleUrls: ['./room-selector.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], RoomSelectorComponent);
    return RoomSelectorComponent;
}());
exports.RoomSelectorComponent = RoomSelectorComponent;
//# sourceMappingURL=room-selector.component.js.map