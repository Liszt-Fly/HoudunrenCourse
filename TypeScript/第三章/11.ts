//abstract抽象类在TypeScript中的使用
//abstract起到了规范的作用，实现不一样，但是必须要统一
//抽象类里可以没有抽象方法和抽象属性
//抽象属性和方法必须在抽象类中
{
	abstract class Animation {
		abstract name: string
		abstract move(): void
		protected getPos(): { x: number; y: number } {
			return { x: 100, y: 100 }
		}
	}
	class Tank extends Animation {
		name: string = "敌方坦克"
		public move(): void {
			console.log(`${this.name}移动`)
		}
	}
	class Player extends Animation {
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
