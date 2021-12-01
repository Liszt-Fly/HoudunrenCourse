import "reflect-metadata"
{
	const RequireDecorator: ParameterDecorator = (
		target: Object,
		propertyKey: string | symbol,
		index: number
	) => {
		//哪些参数需要验证
		let requiredParms: number[] = []
		requiredParms.push(index)

		Reflect.defineMetadata("required", requiredParms, target, propertyKey)
	}

	const validateDecorator: MethodDecorator = (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		const method = descriptor.value
		descriptor.value = function () {
			const requiredParms: number[] = Reflect.getMetadata(
				"required",
				target,
				propertyKey
			)
			console.log(requiredParms)
			console.log(arguments.length)
			requiredParms.forEach((index) => {
				if (index > arguments.length || arguments[index] == undefined) {
					throw new Error("请传递必要的参数")
				}
				return method.apply(this, arguments)
			})
		}
	}
	class User {
		@validateDecorator
		find(name: string, @RequireDecorator id: number) {}
	}

	new User().find("hello", 34)
}
