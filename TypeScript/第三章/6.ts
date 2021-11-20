class Axios {
	readonly site: string = "https://qiaoyangedu.com"
	public constructor(site?: string) {
		this.site = site || "https://houdunren.com"
	}
	public get(url: string): any[] {
		console.log(`你请求的是${this.site}/${url}`)
		return []
	}
}
//readonly属性在constructor初始化的时候可以进行修改
const instance = new Axios()
//instance.site = "https://houdunren.com"//error
const instance1 = new Axios("https://houdunren.com")
console.log(instance1.get("about"))
