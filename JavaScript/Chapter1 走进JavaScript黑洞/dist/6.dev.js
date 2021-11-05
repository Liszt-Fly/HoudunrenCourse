"use strict";

//var在函数中有作用域，封装在一个立即执行的函数中不会被相互干扰
(function () {
  var web = "hdcms";
})();

(function () {
  var $ = window.$ = {};
  $.web = "mikeedu";
}).bind(window)();