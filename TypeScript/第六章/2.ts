//命名空间的嵌套
namespace User2 {
	export let hd1 = "houdunren.com"
	export namespace Member {
		export let name = "向军老师"
	}
}
console.log(User2.Member.name)
