let k: string
let k1: (a: number, b: number) => number
k1 = (a: number, b: number) => {
	return a + b
}
k1(1, 1)
type usertype = { name: string; age: string }
let addUser1: (user: usertype) => boolean
addUser1 = (user: usertype): boolean => {
	console.log("添加用户")
	return true
}

addUser1({ name: "houdunren", age: "18" })
