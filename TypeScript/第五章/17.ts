//属性装饰器和参数装饰器
{
	//* 对于静态属性来说，构造函数target
	//* 对于普通属性来说，原型函数target
	const PropDecorator: PropertyDecorator = (...args: any[]) => {
		console.log(args)
	}
	const ParameterDecorator: ParameterDecorator = (...args: any[]) => {
		console.log(args[1])
	}
	class Hd {
		@PropDecorator //参数1 原型对象 参数2 方法名称 参数3 参数的位置
		public name: string | undefined

		public show(@ParameterDecorator content: string) {}
	}
}
