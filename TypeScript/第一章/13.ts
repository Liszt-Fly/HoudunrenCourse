let func: Function = () => {
	console.log("hello")
}
func()
//可选参数
function sum(a: number, b: number, ratio?: number) {
	ratio = ratio || 0.6
	return (a + b) * 0.6
}
console.log(sum(2, 3))
//默认值
function sum1(a: number, b: number, ratio: number = 0.6) {
	return (a + b) * ratio
}
console.log(sum(2, 3, 4))
