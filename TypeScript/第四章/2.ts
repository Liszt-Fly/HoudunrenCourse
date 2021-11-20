//T类型的要求是有length属性
function getLength<T extends { length: number }>(arg: T): number {
	return arg.length
}
console.log(getLength("houdunrne.com"))
console.log(getLength(["a", "b", "c"]))
// console.log(getLength(1))//*不满足条件
function getLength1<T>(arg: T[]): number {
	return arg.length
}
//泛型的继承是满足要求的一个过程，让泛型的范围缩小
