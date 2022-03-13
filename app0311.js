// let a = 1

// while (a < 10) {
//   console.log(a)
//   a = a + 1
// }

// function hello() {
//   console.log(123)
//   console.log(456)
//   console.log(789)
// }

// hello()

// const hello = function () {
//   console.log(123)
// }

// const hello = () => {
//   console.log(123)
// }

// hello()
// //  abc是參數
// function sayHello(a, b = 1, c = 2) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// //123 這些是引數arguments
// // sayHello(123, 456, 789)

// sayHello(123, 456, 789)

// function add(a, b) {
//   let result = a + b
//   return result
//   //return a + b
// }

// console.log(add(1, 2))

// function hello(n) {
//   //如果大於等於0就印出n
//   if (n >= n + 2) {
//     console.log(a)
//   }
//   else {
//     console.log(b)
//   }
// }

// hello(10)

// function add(a, b) {
//   if (a >= 0 && b >= 0) {
//     return a + b
//   } else {
//     return "err"
//   }
// }

// function add(a, b){
//     //early return
//     if (a < 0 || b<0){
//         return "err"
//     }

//     return a + b
// }

// console.log(add(10, 20))
// console.log(add(-10, 20))

// function bmi(height, weight) {
//   let h = height / 100
//   return (weight / (h * h)).toFixed(2)
// }

// console.log(bmi(150, 50))

// function leapYear(year) {
//   if (year % 4 == 0) {
//     return "平年"
//   } else if (year % 100 == 0) {
//     return "閏年"
//   } else if (year % 400 == 0) {
//     return "平年"
//   } else {
//     return "閏年"
//   }
// }

// console.log(leapYear(2020))

// let list = ["a", "b", "c", "d"]

// console.log(list[0])

// console.log(list[list.length - 1])

// list.push("e")

// console.log(list)

// list.unshift("f")

// console.log(list)

// list.pop()

// console.log(list)

// let list = ["a", "b", "c", "d"]

// list.splice(1, 0, "z")
// console.log(list)

// list.splice(1, 1)
// list.splice(1, 1)

// console.log(list)

// function headAndTail(list) {
//   return [list[0], list[list.length - 1]]
// }
// let a = [1, 2, 3, 4, 5]
// let b = ["a", "b", "c", "f", "k"]
// console.log(headAndTail(a))
// // [1, 5]
// console.log(headAndTail(b))
// // [("a", "k")]

// const list = ["a", "b", "c", "d"]
// for (let i = 0; i < list.length - 1; i++) {
//   console.log(list[i])
// }

// function headAndTail(list) {
//   return [list[0], list[list.length - 1]]
// }

// let a = [1, 2, 3, 4, 5]
// let b = ["a", "b", "c", "f", "k"]

// console.log(headAndTail(a))
// // [1, 5]
// console.log(headAndTail(b))
// ["a", "k"]

// const list = ["a", "b", "c", "d"]

// list.forEach(function (x) {
//   console.log(x)
// })

// const list = ["a", "b", "c", "d"]
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i])
// }

// const list = ["a", "b", "c", "d"]

// const result = list.find(function (x) {
//   return x == "a"
// })

// //callback 回呼 function
// console.log(result)

// const list = [1, 2, 3, 4, 5]

// for (let b = 1, b <= 5, b++){
//     result[b] = list[b] * 2
// }

// console.log(result)

// const list = [1, 2, 3, 4, 5]
// let newList = []
// for (let i = 0; i < list.length; i++) {
//   newList[i] = (i + 1) * 2
// }
// console.log(newList)
