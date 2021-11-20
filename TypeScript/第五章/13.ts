{
	//装饰器工厂 自定义错误
	const ErrorDecorator = (title: string = "houdunren.com"): MethodDecorator => {
		return (...args: any[]) => {
			const [, , descriptor] = args
			const method = descriptor.value
			descriptor.value = () => {
				try {
					method()
				} catch (error: any) {
					console.log(`${title}`)
					console.log(`${error.message}`)
				}
			}
		}
	}

	class User {
		@ErrorDecorator("标准错误")
		find() {
			throw Error("error")
		}
	}
	new User().find()
}
