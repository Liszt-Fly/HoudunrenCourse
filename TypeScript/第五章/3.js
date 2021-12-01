"use strict";
{
    //装饰器的语法糖
    const moveDecorator = (target) => {
        target.prototype.getPosition = (x, y) => {
            return { x: 100, y: 200 };
        };
    };
    class Tank {
    }
    const t = new Tank();
    //将类的构造函数传递到里面
    moveDecorator(Tank); //使用@moveDecorator是一种语法糖
    console.log(t.getPosition());
}
