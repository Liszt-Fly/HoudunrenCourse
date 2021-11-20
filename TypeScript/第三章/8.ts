{
	//公共内容，不需要分配给对象的，都可以设置为静态属性
	class Axios {
		static site: string = "houdunren.com"
		static getSite(): string {
			return Axios.site
		}
	}

	const instance = new Axios()
	console.log(Axios.site) //静态属性属于类，不属于实例
	console.log(Axios.getSite()) //houdunren.com
}
