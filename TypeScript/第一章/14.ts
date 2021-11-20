function sum(a: number, b: number) {
	return a + b
}

let xs: string = sum(1, 9) as unknown as string
console.log(typeof xs) //number

function msg(): void {
	console.log("houdunren")
}
//箭头函数形式
let msg1 = (): void => console.log("houdunren")
msg1()
