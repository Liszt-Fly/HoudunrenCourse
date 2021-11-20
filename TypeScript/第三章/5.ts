//private方法只能在类的内部进行调用
//父类如果是private 子类不能修改权限
//父类如果是protected,子类可以维持protected或者public
//父类如果是public，子类只能维持public
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
		private sad() {
			console.log("sad")
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
