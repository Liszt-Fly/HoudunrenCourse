//方法的权限控制登录
const user = {
	name: "后盾人",
	isLogin: false,
}
const AccessDecorator: MethodDecorator = (
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) => {
	const method = descriptor.value
	if (user.isLogin === true) {
		return method()
	}
	console.log("请登录后再操作")
}
class Article {
	show() {
		console.log("显示文章")
	}
	@AccessDecorator
	store() {
		console.log("保存文章")
	}
}
