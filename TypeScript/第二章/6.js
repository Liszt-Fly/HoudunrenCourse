var alink = document.querySelector("#hd");
//使用断言明确更详细的类型，获得更强大的功能提示
console.log(alink.href);
var HD = /** @class */ (function () {
    function HD(el) {
        this.el = el;
    }
    HD.prototype.html = function () {
        return this.el.innerHTML;
    };
    return HD;
}());
//告诉TS确实是DIVELEMENT
var el2 = document.querySelector("#hd");
console.log(new HD(el2).html());
