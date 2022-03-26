//lexical scope
//不同程式語言有不同的設計

// let a = 1

// function x() {
//   let a = 2
//   y()
// }

// function y() {
//   console.log(a)
// }
// console.log(a)

//oop物件導向
//繼承 --> 分類自…
//封裝
//原型打造

// const actions = {
//   attack: function () {
//     console.log("ATTACK!!!!")
//   },
//   eat: function () {
//     console.log("YUMMY!")
//   },
// }

// function heroCreator(name, power) {
//   const hero = Object.create(actions)
//   hero.name = name
//   hero.power = power
//   const hero = {
//     // name: name,
//     // power: power,
//     name,
//     power,
//     attack: function () {
//       console.log("ATTACK!")
//     },
//   }
//   return hero

//   this.name = name
//   this.power = power
// }

// const h1 = new heroCreator("kk", 100)
// const h2 = heroCreator("cc", 200)
// console.log(h1)
// h1.attack()
// h2.attack()
//所有的物件都有這屬性__proto__
//prototype chain 原型鋉
//所有的fn都有.prototype
//default -> {}
//__proto__ -> 生它的fn的prototype
//function 有 function跟物件的功能

//下面範例，現實不會用到，對查資料有幫助。實際會用class來做，ES6推出class語法(語法糖衣)，但本質上不變
// function HeroCreator(name, power) {
//     this.name = name
//     this.power = power
//   }

//   const actions = {
//     attack: function () {
//       console.log("attack")
//     },
//     eat: function () {
//       console.log("eat")
//     },
//   }

//   HeroCreator.prototype = actions

//   const h1 = new HeroCreator()
//   h1.attack()

//class寫法
// class Actions {
//     attack() {
//       console.log("attack")
//     }

//     eat() {
//       console.log("eat")
//     }
//   }

//   class HeroCreator extends Actions {
//     constructor(name, power) {
//       super()
//       this.name = name
//       this.power = power
//     }
//   }

//   const h1 = new HeroCreator("kk", 100)
//   h1.attack()
//   console.log(h1)

//prototype-based OOP
//class-based OOP

//this
//誰呼叫，誰就是this
//沒人呼叫(前面沒有小數點)，this -> 全域
//箭頭函式沒有自己的this argument
//是否有使用call/apply/bind 改變this
//是否有使用嚴格模式(有的話this不會亂飄)

//"use strict"
//嚴格模式(相容性問題所以設定成字串)

// const cat = {
//   name: "kitty",
//   age: 18,
//   hello: function () {
//     console.log(this)
//   },
// }

// const dog = {
//   name: "puppy",
//   age: 20,
//   hello: function () {
//     console.log(this)
//   },
// }

// cat.hello()
// dog.hello()

// function hi() {
//   function hey() {
//     console.log(this)
//   }
//   hey()
// }

// hi()

// const arguments = 123

// const a = () => {
//   console.log(arguments)
// }
// const b = function () {
//   console.log(arguments)
// }

// a("aa", "bb", "cc")
// b("aa", "bb", "cc")

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", function () {
//   this.textContent = "123"
// })

// const cat = {
//   name: "Kitty",
//   age: 18,
// }

// function hello() {
//   console.log(this.name)
// }
// hello()
//hello(1, 2, 3)
// hello.call(cat, 1, 2, 3)
//hello.apply(cat,[1, 2, 3 ])
// hello.bind(cat , 1, 2, 3)
//partial function
//curry function

// function adder(x, y) {
//   return x + y
// }

// const add5 = adder.bind(null, 5, 10)
// console.log(add5(6))

//IIFE
//Intermedia...Invoke Function Expression

// ;(function () {
//   console.log("Happy")
// })()

// console.log(123)
