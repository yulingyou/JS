// const list = [1, 2, 3, 4, 5]

// function find45() {
//   result = filter.list(i>=4)
//   return result
// }

// console.log(function(find45))

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let result = list.filter(function (a) {
//   return a % 2 == 1
// })

// console.log(result)
//每回合的return是下一回合的acc
//沒預設值的話，拿第一個元素當預設值
//少跑一圈
//用在歸納
// const list = [1, 2, 3, 4, 5]

// let a = list.reduce(function (acc, cv) {
//   console.log(acc, cv)
//   return acc + cv
// })

// console.log(a)

// const list = [19, 23, 3, 2, 8, 24]

// let a = list.reduce(function (acc, cv) {
//   console.log(acc, cv)
//   if (cv > acc) {
//     return cv
//   } else {
//     return 1
//   }
// })

// console.log(a)

// 為什麼要寫函數
//可以重覆呼叫
//物件 = 屬性 + 行為

// const cat = {
//   age: 18,
//   name: "kk",
//   attack: function () {
//     console.log("go!")
//   },
// }

// console.log(cat)
// cat.name = "cc"
// console.log(cat.name)
// console.log(cat.age)
// console.log(cat["age"])

// cat.attack()

// const cat = {}
// cat.whatever = 1

// console.log(cat)

// const cat = {
//   age: 18,
//   cc: 123,
// }

// console.log(cat)
// delete cat.age
// console.log(cat)

//DOM
//  爪子一號
// const c = document.getElementById("cc")
//爪子二號
// const c = document.querySelector("#list :nth-child(2)")

// const c = document.querySelector("#list :last-child")
// console.log(c)

// const items1 = document.getElementsByClassName("item")

// const items = document.querySelectorAll(".item")

// // items.forEach((item) => {
// //   item.textContent = item.textContent.repeat(5)
// // })

// items.forEach(function (item) {
//   item.textContent = item.textContent.repeat(5)
// })

// const t = document.querySelector("#cc")

// // t.textContent = "<h1>444<h1>"
// t.innerHTML = "<h1>444<h1>"
// t.style.color = "red"
// t.style["background-color"] = "green"

//但盡量讓js操作行為就好，不要改樣式。這不是好的作法。

// t.classList.add("hi")
// t.classList.remove("c")

// const items = document.querySelectorAll(".item")

// items.forEach((item, idx) => {
//   if (idx % 2 == 0) {
//     item.textContent = "a"
//     item.classList.add("hi")
//   }
// })

// document.addEventListener("click", function () {
//   console.log("點了")
// })

// document.addEventListener("DOMContentLoaded", function () {
//   const h = document.querySelector("h1")
//   //抓id要加#
//   console.log(h)

//   h.addEventListener("click", function () {
//     console.log("點了")
//   })
// })

// const h = document.querySelector("h1")
// //抓id要加#，抓屬性加.
// console.log(h)
// h.addEventListener("click", function () {
//   console.log("點了")
// })

// const h = document.querySelector("h1")

// const hey = function () {
//   console.log("點了")
// }

// function hi() {
//   console.log("點了")
// }

// h.addEventListener("click", hey)

// function a() {
//   const b = function () {
//     console.log(123)
//   }
//   return b
// }

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   console.log("yes")
// })

// btn.onclick = function () {
//   console.log(123)
// }

//建議使用監聽器寫法，因on系列是改變屬性，會被後面替換，但監聽器都會出來

const In = document.querySelector("#link")

const btn = document.querySelector("#btn")

In.addEventListener("click", function (e) {
  e.preventDefault()
  console.log("hi")
})

document.addEventListener("contextmenu", (e) => {
  e.preventDefault()
  console.log(123)
})

//  上面為鎖右鍵的作法
