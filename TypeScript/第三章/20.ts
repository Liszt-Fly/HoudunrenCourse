{
	type User = {
		name: string
		age: number
		show(): string
	}

	const hd: User = {
		name: "后盾人",
		age: 23,
		show() {
			return "ok"
		},
	}
	//type可用于声名基本类型的别名
	type IsAdmin = boolean
	//type声明联合类型
	type Sex = "BOY" | "GIRL"
}
