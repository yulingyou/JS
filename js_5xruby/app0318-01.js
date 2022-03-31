// const add = (a, b) => {
//   return a + b
// }

// let result = add(1, 2)

// console.log(result)

// const add = (a, b) => a + b

// let result = add(1, 2)

// console.log(result)

// let n = "kk"
// let age = 18

// const cat = {
//   name: n,
//   age,
// }

// console.log(cat)
//物件簡寫

//解構

// const cat = {
//   name: "kk",
//   age: 18,
// }
//利用刻意巧合
// lte name = cat.name
// let age = cat.age
// let { name } = cat
// let { age } = cat
// let name = "cc"
// let { name: petname, age } = cat
// console.log(petname, age)

//解構可以用別名，避免let到同個名字
//var最好只有在特殊情況在用(比如要重覆抓取名字的狀況，不能用let時)

// function hello({ name, age }) {
//   console.log(name, age)
// }
// const hero = {
//   name: "kk",
//   age: 18,
// }
// hello(hero)

//解構可以寫在函式裡，取別名也有可讀性的用途，比如網路抓取別人的資料
//解構技巧，要往前端必學，其他程式語言幾乎沒有

//...1、炸開，要用[]接，類似concat

// const a = [1, 2, 3]
// const b = [4, 5, 6]
//const c = a.concat(b)

// const c = [...a, ...b]
// console.log(c)

// ...2、另一個功能類似spread operator

// function sayHello(x, y, ...z) {
//   console.log(x, y, z)
// }

// sayHello(...a)

//...3、剩下我全收，用[]裝 Rest operator

// function hi(a, b, ...c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// hi(1, 2, 3)
// const box = document.querySelector("#hello")
// const h = document.createElement("h1")
// h.textContent = "hello"

// box.appendChild(h)

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   const lastOne = document.querySelector("#list :last-child")

//   if (lastOne) {
//     lastOne.remove()
//   }
//   //console.log(lastOne)
// })

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   const u = document.querySelector("#list")
//   const lastOne = document.querySelector("#list :last-child")

//   if (lastOne) {
//     u.lastOne.remove()
//   }
//   //console.log(lastOne)
// })

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   const lastOne = document.querySelector("#list :last-child")

//   console.log(lastOne.parentElement)
//   console.log(lastOne.parentNode)
// })

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   const pa = document.querySelector("ul")

//   console.log(pa.children)
//   console.log(pa.childNodes)
// })

// const lastOne = document.querySelector("ul:last-child")

// console.log(lastOne.previousElementSibling)
// console.log(lastOne.previousSibling)
// console.log(lastOne.nextElementSibling)
// console.log(lastOne.nextSibling)

// const list = document.querySelector("#list")

// const newLi = document.createElement("li")

// newLi.textContent = "X"

// list.insertAdjacentElement("beforeend", newLi)
// list.insertAdjacentElement("afterend", newLi)
// list.insertAdjacentElement("afterbegin", newLi)
// list.insertAdjacentElement("beforebegin", newLi)

// const list = document.querySelector("#list")
// 可用for迴圈0318/02:10

// const list = document.querySelector("#list")

// const newLi = document.createElement("li")
// newLi.textContent = "X"

// let msg = "X"
// const newLi = `<li>${msg}<li>`

// list.insertAdjacentHTML("beforeend", newLi)
