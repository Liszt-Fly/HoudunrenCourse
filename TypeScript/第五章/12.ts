const ErrorDecorator: MethodDecorator = (
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) => {
	const method = descriptor.value
	descriptor.value = () => {
		try {
			method()
		} catch (error) {
			console.log("houdunren.com", "color:red;font-size:16px")
		}
	}
}

class User {
	@ErrorDecorator
	find() {
		throw new Error("出错了")
	}
}

new User().find()
