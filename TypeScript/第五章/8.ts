{
	const showDecorator: MethodDecorator = (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		descriptor.writable = false
	}

	class User {
		@showDecorator
		public static show() {
			console.log("houdunren.com")
		}
	}
	User.show = () => {
		console.log("mikeedu")
	}
	//ERROR writable为false，不能重新声明
	User.show()
}
