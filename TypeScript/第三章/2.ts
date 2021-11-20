{
	class myUser {
		name: string
		age: number
		constructor(n: string, a: number) {
			this.name = n
			this.age = a
		}
		info() {
			return `${this.name}的年龄是${this.age}`
		}
	}

	const hd1 = new myUser("hello", 23)
	const xj = new myUser("向军", 24)
	const users: myUser[] = []
	users.push(hd1, xj)
	console.log(users)
}
