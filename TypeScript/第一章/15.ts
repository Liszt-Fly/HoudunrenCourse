//type关键字

type userType = {
	name: string
	age: number
	sex?: string | number
}

let addUser = (user: userType): void => {
	console.log("添加用户")
}
addUser({ name: "后盾人", age: 21, sex: "男" })

let updateUser = (user: userType): void => {
	console.log("更新用户")
}
