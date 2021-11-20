{
	interface PayInterface {
		handle(price: number): void
	}
	class AliPay implements PayInterface {
		public handle(price: number): void {
			console.log("支付宝付款" + price)
		}
	}
	class WePay implements PayInterface {
		public handle(price: number): void {
			console.log("微信付款" + price)
		}
	}
}
