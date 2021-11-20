{
	//将规范全部放置于接口内
	interface AnimationInterface {
		name: string
		move(): void
	}
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
	}
	class Player extends Animation implements AnimationInterface {
		name: string = "我方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
	}
	const hd = new Tank()
	const hd1 = new Player()
	hd.move()
	hd1.move()
}
