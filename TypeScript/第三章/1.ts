// interface Mmeber {
// 	name: string
// }
// interface User extends Mmeber {
// 	age: number
// }

// class Person implements User {
// 	age: number = 23
// 	name: string = "houdunren"
// }
//* type可以进行组合定义
type name = {
	name: string
}

type age = {
	age: number
}

type User = name & age //name |age

const hd: User = {
	name: "houdunren",
	age: 23,
}

type User1 = { name: string; age: number }
class Person implements User1 {
	name: string = "后盾人"
	age: number = 31
}
interface User2 {
	id: number
}

type User3 = User1 & User2
//* class既可以implements type也可以 implements interface
