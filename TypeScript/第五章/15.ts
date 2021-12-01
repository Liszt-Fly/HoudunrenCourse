{
	type userType = { name: string; isLogin: boolean; permissions: string[] }
	const user: userType = {
		name: "后盾人",
		isLogin: true,
		permissions: ["store"],
	}

	const AccessDecorator =
		(keys: string[]): MethodDecorator =>
		(
			target: Object,
			propertyKey: string | symbol,
			descriptor: PropertyDescriptor
		) => {
			const method = descriptor.value
			const validate = () => {
				return keys.every((key) => {
					// console.log(user.permissions.includes(key))
					return user.permissions.includes(key)
				})
			}
			console.log(validate())
			if (user.isLogin === true && validate()) {
				console.log(validate())
				console.log("验证成功")
				return method()
			}
			console.log("验证失败")
		}
	class Article {
		show() {
			console.log("显示文章")
		}
		@AccessDecorator(["store"])
		store() {
			console.log("保存文章")
		}
	}
}
