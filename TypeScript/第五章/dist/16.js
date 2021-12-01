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
{
    //模拟网络延迟
    const RequestDecorator = (url) => {
        return (target, propertyKey, descriptor) => {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(["user", "apple"]);
                }, 4000);
            }).then((users) => {
                console.log(users);
            });
        };
    };
    let User = /** @class */ (() => {
        class User {
            all(users) {
                console.log(users);
            }
        }
        __decorate([
            RequestDecorator("https://houdunren.com"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Array]),
            __metadata("design:returntype", void 0)
        ], User.prototype, "all", null);
        return User;
    })();
}
