{
	//泛型 generics 在传递参数的时候动态的设置参数类型
	let a: string = "houdunren.com"

	function dump(arg) {
		return arg
	}
	let hd = dump("houdunren.com")
	let xj = dump(true) //返回类型不确定
	function myFunction<T>(arg: T): T {
		return arg
	}
	let b = myFunction<string>("houdunren.com")
	let res = myFunction<boolean>(false)
}
