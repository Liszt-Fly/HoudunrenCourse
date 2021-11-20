{
	//使用枚举
	enum SexType {
		MAN,
		WOMAN,
	}
	interface UserInterface {
		name: string
		age: number
		sex: SexType
	}

	const hd: UserInterface = {
		name: "houdunren",
		age: 18,
		sex: SexType.MAN,
	}
	const xj: UserInterface = { name: "xj", age: 18, sex: SexType.WOMAN }
	//array中使用接口
	const users: UserInterface[] = [hd, xj]
}
