//类型推断
var hd1 = ["houdunren.com"];
hd1.push("yahoo.com");
//* hd1.push(3)
//报错，number类型不能赋值给string类型
var hd2 = ["houdunren.com", 2];
hd2.push(4);
hd2.push("hello");
