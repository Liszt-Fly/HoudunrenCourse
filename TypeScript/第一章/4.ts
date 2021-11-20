//强大的智能提示
const user = {
	name: "houdunren",
	age: 18,
	open: true,
	lesson: [
		{
			title: "linux",
		},
		{
			title: "TS",
		},
	],
}
console.log(user.age)
user.lesson.push({ title: "MYSQL" })
console.log(user.lesson[0].title)
