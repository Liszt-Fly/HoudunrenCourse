{
	//接口对对象的约束
	interface UserInterface {
		name: string
		age: number
		info(): string
		//可以有任何字符串属性
		[key: string]: any
	}

	let hd: UserInterface = {
		name: "houdunren",
		age: 18,
		info() {
			return this.name
		},
		sex: "女",
	}
	console.log(hd.info()) //houdunren
}
