{
	//装饰器的叠加
	const moveDecorator: ClassDecorator = (target: Function) => {
		target.prototype.getPosition = (x: number, y: number) => {
			return { x: 100, y: 200 }
		}
	}
	const MusicDecorator: ClassDecorator = (target: Function) => {
		target.prototype.playMusic = (): void => {
			console.log("播放音乐")
		}
	}
	//为坦克类增加播放音乐和移动位置功能
	@moveDecorator
	@MusicDecorator
	class Tank {}
	const t = new Tank()
	;(<any>t).playMusic()
	console.log((<any>t).getPosition())
}
