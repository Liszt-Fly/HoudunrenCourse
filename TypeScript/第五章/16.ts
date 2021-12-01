{
	//模拟网络延迟
	const RequestDecorator = (url: string): MethodDecorator => {
		return (
			target: Object,
			propertyKey: string | symbol,
			descriptor: PropertyDescriptor
		) => {
			new Promise<any[]>((resolve) => {
				setTimeout(() => {
					resolve(["user", "apple"])
				}, 4000)
			}).then((users) => {
				console.log(users)
			})
		}
	}
	class User {
		@RequestDecorator("https://houdunren.com")
		public all(users: any[]) {
			console.log(users)
		}
	}
}
