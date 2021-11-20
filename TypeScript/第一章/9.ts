//当一个类型写成any，和原生js没有任何的区别
let c: string | number | object | boolean
//直接使用any
let d: any
d = false
d = 3
d = {}
d = []
class Hd {
	constructor() {}
	get = () => "hello,world"
}
//可以在tsconfig中限制any的使用
const obj: Hd = new Hd()
