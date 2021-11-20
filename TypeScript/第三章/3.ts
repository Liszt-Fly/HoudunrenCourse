{
	//默认权限public
	class myUser {
		protected name: string
		public age: number
		constructor(n: string, a: number) {
			this.name = n
			this.age = a
		}
		public info() {
			return `${this.name}的年龄是${this.age}`
		}
	}

	const hd1 = new myUser("hello", 23)
	const xj = new myUser("向军", 24)
	const users: myUser[] = []
	users.push(hd1, xj)
	console.log(users)
	console.log(hd1.info())
}
