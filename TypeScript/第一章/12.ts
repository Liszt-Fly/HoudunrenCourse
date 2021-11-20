let m: null = null
let n1: undefined = undefined

function get(): null | string {
	return null
}
console.log(get())
//默认情况下,null和undefined可以变成其他类型的值
//在严格模式下不可以
