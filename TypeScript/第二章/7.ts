const bt = document.querySelector("#bt") as HTMLButtonElement

bt.addEventListener("click", (e: Event) => {
	e.preventDefault()
	//断言一定存在
	const body = document.querySelector("body")!
	body.insertAdjacentHTML("beforeend", "<h2>xj老师</h2>")
})
