//类型不一定是基本类型，也可以约束为值
function hd12(arg: boolean): string | number {
	return arg ? "ok" : 2030
}

let res = hd12(true) as string
// res = 2 //error 断言res是string，那么number的可能性就不存在
console.log(res)

let m1: "cs101" | "cs102" //值类型限定为这两个，相当于const值限定
//const断言
let m2 = "cs101" as const //等同于 let m2:"mike"

let arr = [res, m2] as const //as const 根据数组值转化为元组

let arr2 = [5, "hello", 23] as const
const obj1 = {
	name: "houdunren",
} as const
//只读类型，name只能取const
const obj2 = {
	name: m2,
} as const
//数组as const第二种方式
let a5 = "houdunren"
let a6 = 2030
//写入变量名是传递的类型，直接传入变量值就是限定类型
let hd51 = [a5, a6] as const
//第二种方式
let hd52 = <const>[a5, a6]
{
	let a = 1
	let b = 2
	let arr = [a, b] as const

	let arr1 = [1, 2] as const
}
