//当一个类型写成any，和原生js没有任何的区别
var c;
//直接使用any
var d;
d = false;
d = 3;
d = {};
d = [];
var Hd = /** @class */ (function () {
    function Hd() {
        this.get = function () { return "hello,world"; };
    }
    return Hd;
}());
var obj = new Hd();
console.log(obj.show());
