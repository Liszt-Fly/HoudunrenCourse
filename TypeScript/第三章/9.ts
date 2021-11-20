{
	//单例模式
	class Axios {
		private static instance: Axios | null = null
		//禁止在外部进行实例化
		private constructor() {}
		static make(): Axios {
			if (Axios.instance == null) {
				console.log("创建axios实例")
				Axios.instance = new Axios()
			}
			return Axios.instance
		}
	}
	const instance = Axios.make()
	const instance1 = Axios.make()
	const instance2 = Axios.make()
	const instance3 = Axios.make()
	const instance4 = Axios.make()
	const instance5 = Axios.make()
	//最终只创建了一个实例
	console.log(instance)
}
