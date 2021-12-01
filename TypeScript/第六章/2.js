"use strict";
//命名空间的嵌套
var User2;
(function (User2) {
    User2.hd1 = "houdunren.com";
    let Member;
    (function (Member) {
        Member.name = "向军老师";
    })(Member = User2.Member || (User2.Member = {}));
})(User2 || (User2 = {}));
console.log(User2.Member.name);
