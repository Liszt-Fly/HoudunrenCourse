{
	//接口之间可以相互继承，一个类可以实现多个接口规范
	interface base {
		init(): void
	}
	interface PlayEndInterface {
		end(): void
	}
	interface AnimationInterface extends PlayEndInterface {
		name: string
		move(): void
	}
	abstract class Animation {
		protected getPos(): { x: number; y: number } {
			return { x: 100, y: 100 }
		}
	}
	class Tank extends Animation implements AnimationInterface, base {
		name: string = "敌方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
		public end(): void {
			console.log("游戏结束")
		}
		public init(): void {
			console.log("初始化")
		}
	}
	class Player extends Animation implements AnimationInterface, base {
		name: string = "我方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
		public end(): void {
			console.log("游戏结束")
		}
		public init(): void {
			console.log("初始化完毕")
		}
	}
	const hd = new Tank()
	const hd1 = new Player()
	hd.move()
	hd1.move()
}
