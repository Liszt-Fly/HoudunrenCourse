const MessageDecorator = (target: Function) => {
	target.prototype.message = (content: string) => {
		console.log(content)
	}
}
@MessageDecorator
class LoginController {
	public login() {
		console.log("登陆业务处理")
		;(<any>this).message("恭喜你，登陆成功")
	}
}
@MessageDecorator
class ArticleController {
	public store() {
		;(<any>this).message("添加文章成功")
	}
}

new LoginController().login()
