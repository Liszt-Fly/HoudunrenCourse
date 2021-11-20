//解构中使用as const
function hdcms() {
	let a = "hello,world"
	let b: Function = () => {
		console.log("THIS")
	}
	return [a, b] as const
}

const [ar, sr] = hdcms()
sr() //无法确定哪一个是Function,只有使用as const 进行确定
