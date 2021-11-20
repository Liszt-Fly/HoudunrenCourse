{
	const moveDecorator: ClassDecorator = (target: Function) => {
		target.prototype.getPosition = (x: number, y: number) => {
			return { x: 100, y: 200 }
		}
	}
	@moveDecorator
	class Tank {}

	const t = new Tank()
	console.log((<any>t).getPosition())
	@moveDecorator
	class Player {}
	const p = new Player()
	console.log((<any>p).getPosition())
}
