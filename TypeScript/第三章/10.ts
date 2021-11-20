{
	//访问器的使用
	class User {
		private _name: string
		constructor(name: string) {
			this._name = name
		}
		public get name(): string {
			return this._name
		}
		//不能设置为void
		public set name(name: string) {
			this._name = name
		}
	}

	const hd = new User("Mike")
	console.log(hd.name)
	hd.name = "JAVAEDU"
	console.log(hd.name)
}
