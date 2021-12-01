"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

{
  var user = {
    name: "后盾人",
    isLogin: true,
    permissions: ["store"]
  };

  var AccessDecorator = function AccessDecorator(keys) {
    return function (target, propertyKey, descriptor) {
      var method = descriptor.value;

      var validate = function validate() {
        return keys.every(function (key) {
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
  };

  var Article =
  /*#__PURE__*/
  function () {
    function Article() {
      _classCallCheck(this, Article);
    }

    _createClass(Article, [{
      key: "show",
      value: function show() {
        console.log("显示文章");
      }
    }, {
      key: "store",
      value: function store() {
        console.log("保存文章");
      }
    }]);

    return Article;
  }();

  __decorate([AccessDecorator(["store"]), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Article.prototype, "store", null);
}