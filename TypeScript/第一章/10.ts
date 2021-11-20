//any和unknown的区别
let n: any = "houdunren.com"
let p: string = n
console.log(p)
//unknown不是任何类型，只是该类型未知，它是具有类型的
let xj: unknown = "houdunren"
// let g1: string = xj
//* 使用as
let g: string = xj as string
//as的使用 unknown作为中间层进行中转
//string不能as number
let q: string = "99"
let q1: number = q as unknown as number
console.log(q1) //99
