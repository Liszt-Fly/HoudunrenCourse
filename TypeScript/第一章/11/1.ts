//void多用于函数的返回值
function run(): string | void {
	console.log("Hello,world")
}
run()
//never不执行结束，用于抛出错误的函数
function hd11(): never {
	throw new Error("类型错误")
}
