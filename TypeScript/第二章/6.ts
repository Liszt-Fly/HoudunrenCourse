let alink = document.querySelector("#hd") as HTMLLinkElement
//使用断言明确更详细的类型，获得更强大的功能提示
console.log(alink.href)

class HD {
	el: HTMLDivElement
	constructor(el: HTMLDivElement) {
		this.el = el
	}
	html() {
		return this.el.innerHTML
	}
}
//告诉TS确实是DIVELEMENT
const el2 = document.querySelector("#hd") as HTMLDivElement
console.log(new HD(el2).html())
