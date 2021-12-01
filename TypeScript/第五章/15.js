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
    const user = {
        name: "后盾人",
        isLogin: true,
        permissions: ["store"],
    };
    const AccessDecorator = (keys) => (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        const validate = () => {
            return keys.every((key) => {
                // console.log(user.permissions.includes(key))
                return user.permissions.includes(key);
            });
        };
        console.log(validate());
        if (user.isLogin === true && validate()) {
            console.log(validate());
            console.log("验证成功");
            return method();
        }
        console.log("验证失败");
    };
    class Article {
        show() {
            console.log("显示文章");
        }
        store() {
            console.log("保存文章");
        }
    }
    __decorate([
        AccessDecorator(["store"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Article.prototype, "store", null);
}
