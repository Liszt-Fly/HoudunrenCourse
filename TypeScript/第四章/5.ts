//接口可以指定多个类型
interface ArticleInterface<B, C> {
	title: string
	isLock: B
	comments: C[]
}

type CommentType = {
	content: string
	author?: string
}

const hd: ArticleInterface<boolean, CommentType> = {
	title: "后盾人网站",
	isLock: true,
	comments: [
		{ content: "非常有趣", author: "后盾人" },
		{ content: "这是一个评论" },
		{ content: "很精彩很喜欢" },
	],
}
