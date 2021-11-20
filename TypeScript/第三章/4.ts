//protected 类里或者继承可以使用
{
	class Person {
		name: string
		age: number
		constructor(n: string, a: number) {
			this.name = n
			this.age = a
		}
		protected info() {
			return `${this.name}的年龄是${this.age}`
		}
	}
	//默认权限public
	class myUser extends Person {
		constructor(n: string, a: number) {
			super(n, a)
		}
		public show() {
			//可以使用protected方法
			return this.info()
		}
	}

	const hd1 = new myUser("hello", 23)
	const xj = new myUser("向军", 24)
	const users: myUser[] = []
	users.push(hd1, xj)
	console.log(users)
	//	console.log(hd1.info()) //不能在外部进行访问
}
