"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

{
  //装饰器的叠加
  var moveDecorator = function moveDecorator(target) {
    target.prototype.getPosition = function (x, y) {
      return {
        x: 100,
        y: 200
      };
    };
  };

  var MusicDecorator = function MusicDecorator(target) {
    target.prototype.playMusic = function () {
      console.log("播放音乐");
    };
  }; //为坦克类增加播放音乐和移动位置功能


  var Tank = function Tank() {
    _classCallCheck(this, Tank);
  };

  Tank = __decorate([moveDecorator, MusicDecorator], Tank);
  var t = new Tank();
  t.playMusic();
  console.log(t.getPosition());
}