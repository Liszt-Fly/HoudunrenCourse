define("4", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.User = void 0;
    var User;
    (function (User) {
        User.name = "houdunren";
    })(User = exports.User || (exports.User = {}));
});
define("App", ["require", "exports", "4"], function (require, exports, _4_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.insertAdjacentHTML("beforeend", `<h2>${_4_js_1.User.name}`);
});
