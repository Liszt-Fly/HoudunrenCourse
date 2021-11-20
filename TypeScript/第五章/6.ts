{
	//装饰器工厂
	const MusicDecoratorFactory = (type: string): ClassDecorator => {
		switch (type) {
			case "Tank":
				return (target: Function) => {
					target.prototype.playMusic = (): void => {
						console.log("播放战争音乐")
					}
				}

			case "Player":
				return (target: Function) => {
					target.prototype.playMusic = (): void => {
						console.log("播放喜羊羊音乐")
					}
				}
			default:
				return (target: Function) => {
					console.log("未知情况，请重新处理")
				}
		}
	}
	@MusicDecoratorFactory("Tank")
	class Tank {}

	const t = new Tank()
	;(<any>t).playMusic()
	@MusicDecoratorFactory("Player")
	class Player {}
	const p = new Player()
	;(<any>p).playMusic()
}
