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
//方法的权限控制登录
const user = {
    name: "后盾人",
    isLogin: false,
};
const AccessDecorator = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    if (user.isLogin === true) {
        return method();
    }
    console.log("请登录后再操作");
};
let Article = /** @class */ (() => {
    class Article {
        show() {
            console.log("显示文章");
        }
        store() {
            console.log("保存文章");
        }
    }
    __decorate([
        AccessDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Article.prototype, "store", null);
    return Article;
})();
