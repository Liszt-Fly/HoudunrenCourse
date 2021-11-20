{
	class User {
		public constructor(public name: string) {
			this.name = this.initName("name")
		}
		private initName(name: string) {
			return `${name}-houdunren.com`
		}
	}

	const hd = new User("后盾人")
	console.log(hd.name) //name-houdunren.com
}
//使用public不需要声明name属性，直接使用
