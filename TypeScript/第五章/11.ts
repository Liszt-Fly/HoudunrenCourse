{
	const sleepDecorator =
		(times: number): MethodDecorator =>
		(...args: any[]) => {
			const [, , descriptor] = args
			const method = descriptor.value
			descriptor.value = () => {
				setTimeout(() => {
					method()
				}, times)
			}
		}
	class User {
		@sleepDecorator(5000)
		public static show() {
			console.log("hello,world")
		}
	}
	User.show()
}
