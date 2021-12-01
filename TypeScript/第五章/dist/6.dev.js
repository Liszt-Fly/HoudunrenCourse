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
  //装饰器工厂
  var MusicDecoratorFactory = function MusicDecoratorFactory(type) {
    switch (type) {
      case "Tank":
        return function (target) {
          target.prototype.playMusic = function () {
            console.log("播放战争音乐");
          };
        };

      case "Player":
        return function (target) {
          target.prototype.playMusic = function () {
            console.log("播放喜羊羊音乐");
          };
        };

      default:
        return function (target) {
          console.log("未知情况，请重新处理");
        };
    }
  };

  var Tank = function Tank() {
    _classCallCheck(this, Tank);
  };

  Tank = __decorate([MusicDecoratorFactory("Tank")], Tank);
  var t = new Tank();
  t.playMusic();

  var Player = function Player() {
    _classCallCheck(this, Player);
  };

  Player = __decorate([MusicDecoratorFactory("Player")], Player);
  var p = new Player();
  p.playMusic();
}