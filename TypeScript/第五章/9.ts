{
	//使用装饰器实现文本
	const highlightDecorator: MethodDecorator = (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		let method = descriptor.value
		descriptor.value = () => {
			return `<div color="red>${method()}</div>`
		}
	}
	class Text {
		@highlightDecorator
		public static init() {
			return "Init...."
		}
	}
	console.log(Text.init())
}
