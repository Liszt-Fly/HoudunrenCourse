{
	interface userInterface {
		name: string
		age: number
	}
	//类中使用interface
	class User {
		private _info: userInterface
		constructor(user: userInterface) {
			this._info = user
		}
		get info(): userInterface {
			return this._info
		}
	}
	const hd = new User({ name: "Mike", age: 18 })
	console.log(hd.info)
}
