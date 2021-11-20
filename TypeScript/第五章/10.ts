{
	//延迟执行
	const sleepDecorator: MethodDecorator = (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		let method = descriptor.value
		descriptor.value = () => {
			setTimeout(() => {
				method()
			}, 2000)
		}
	}
	class Text {
		@sleepDecorator
		public static init() {
			console.log("Init")
		}
	}
	Text.init()
}
