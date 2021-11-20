{
	//函数接口
	interface Pay {
		(price: number): boolean
	}
	const WePay: Pay = (price: number) => {
		return true
	}

	//接口声明的合并

	//将规范全部放置于接口内
	interface AnimationInterface {
		name: string
		move(): void
	}
	interface AnimationInterface {
		test(): void
	}
	//接口不会被覆盖，可重复声明，接口被合并（意味着三个规范都需要被实现）
	abstract class Animation {
		protected getPos(): { x: number; y: number } {
			return { x: 100, y: 100 }
		}
	}
	class Tank extends Animation implements AnimationInterface {
		name: string = "敌方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
		public test(): void {
			console.log("test mode")
		}
	}
	class Player extends Animation implements AnimationInterface {
		name: string = "我方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
		public test(): void {
			console.log("test mode")
		}
	}
}
