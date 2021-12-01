"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  //装饰器的语法糖
  var moveDecorator = function moveDecorator(target) {
    target.prototype.getPosition = function (x, y) {
      return {
        x: 100,
        y: 200
      };
    };
  };

  var Tank = function Tank() {
    _classCallCheck(this, Tank);
  };

  var t = new Tank(); //将类的构造函数传递到里面

  moveDecorator(Tank); //使用@moveDecorator是一种语法糖

  console.log(t.getPosition());
}