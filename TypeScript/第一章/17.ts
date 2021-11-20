function sum(...args: number[]): number {
	return args.reduce((s, n) => s + n, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6))
//元组类型 特别注意二者之间的差异
let tuple: [string, number, boolean] = ["houdunren", 2030, false]
let array1: (number | string)[] = [5, 3, "7", 9, 2]
