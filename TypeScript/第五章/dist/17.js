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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//属性装饰器和参数装饰器
{
    //* 对于静态属性来说，构造函数target
    //* 对于普通属性来说，原型函数target
    const PropDecorator = (...args) => {
        console.log(args);
    };
    const ParameterDecorator = (...args) => {
        console.log(args[1]);
    };
    let Hd = /** @class */ (() => {
        class Hd {
            show(content) { }
        }
        __decorate([
            PropDecorator //参数1 原型对象 参数2 方法名称 参数3 参数的位置
            ,
            __metadata("design:type", Object)
        ], Hd.prototype, "name", void 0);
        __decorate([
            __param(0, ParameterDecorator),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], Hd.prototype, "show", null);
        return Hd;
    })();
}
