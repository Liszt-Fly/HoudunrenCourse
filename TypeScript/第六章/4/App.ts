/* reference的使用
/// <reference path="1.ts" />
*/
import { User } from "./4.js"
document.body.insertAdjacentHTML("beforeend", `<h2>${User.name}`)
