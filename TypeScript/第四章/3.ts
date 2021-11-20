// class CollectionNumber {
// 	data: number[] = []
// 	public push(...items: number[]) {
// 		this.data.push(...items)
// 	}
// 	public shift(): number {
// 		return this.data.shift()! //防止undefined
// 	}
// }
// const numberCollection = new CollectionNumber()
// numberCollection.push(1, 2, 3, 4, 5, 6, 7)
// console.log(numberCollection.shift())

class Collection<HD> {
	data: HD[] = []
	public push(...items: HD[]) {
		this.data.push(...items)
	}
	public shift(): HD {
		return this.data.shift()!
	}
}
const collection = new Collection<number>()
collection.push(1, 2, 3, 4, 5)
console.log(collection.shift())

const user_collection = new Collection<string>()
user_collection.push("张三", "李四", "王五", "赵六")
console.log(user_collection.shift())
