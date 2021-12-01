//安装package支持特性 yarn add reflect-metadata
//什么是元数据？元数据是数据的数据
import "reflect-metadata"
{
	let hd = {
		name: "后盾人",
	}
	Reflect.defineMetadata("xj", { url: "houdunren.com" }, hd, "name")
	console.log(Reflect.getMetadata("xj", hd, "name"))
}
