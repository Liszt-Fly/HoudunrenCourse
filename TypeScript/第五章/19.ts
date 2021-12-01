const RandomColorDecorator: PropertyDecorator = (
	target: Object,
	propertyKey: string | symbol
) => {
	const colors: string[] = ["red", "green", "blue", "purple"]
	Object.defineProperty(target, propertyKey, {
		get() {
			return colors[Math.floor(Math.random() * colors.length)]
		},
	})
}
class Hd {
	@RandomColorDecorator
	public color: string | undefined

	public draw() {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<div style="height:200px;width:200px;background-color:${this.color}">houdunren</div>`
		)
	}
}
const hd = new Hd()
console.log(hd.color)
hd.draw()
