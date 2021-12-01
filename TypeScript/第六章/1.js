"use strict";
//命名空间的基本使用
var User;
(function (User) {
    User.hd = "houdunren.com";
})(User || (User = {}));
var Member1;
(function (Member1) {
    Member1.hd = "houdunren.com";
})(Member1 || (Member1 = {}));
console.log(User.hd);
console.log(Member1.hd);
