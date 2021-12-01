"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const moveDecorator = (target) => {
        target.prototype.getPosition = (x, y) => {
            return { x: 100, y: 200 };
        };
    };
    let Tank = class Tank {
    };
    Tank = __decorate([
        moveDecorator
    ], Tank);
    const t = new Tank();
    console.log(t.getPosition());
    let Player = class Player {
    };
    Player = __decorate([
        moveDecorator
    ], Player);
    const p = new Player();
    console.log(p.getPosition());
}
