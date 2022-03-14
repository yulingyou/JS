// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// const list = [19, 5, 42, 2, 77]
// // 實作程式碼寫在這裡

// let min = list.sort(function (a, b) {
//   return a - b
// })

// console.log(min[0] + min[1])

// 用排序把陣列由小到大排好，再取出第1及第2的數字相加

// 最終結果應該要印出 7

// # 題目：寫一小段程式，印出陣列裡缺的字

// # 範例：

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// function fearNotLetter(str) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz"
//   let startingPoint = alphabet.indexOf(str[0])

//   for (let i = 0; i < str.length + 1; i++) {
//     if (str[i] !== alphabet[startingPoint + i]) {
//       return alphabet[startingPoint + i]
//     }
//   }
//   return undefined
// }

// let str = ["a", "b", "c", "d", "f", "g"]
// console.log(str[alphabet])

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// let lowercase = ["a", "b", "c", "d", "f", "g"].join()
// let captial = ["O", "Q", "R", "S"].join()

// function missingLetter(str) {
//   for (let i = 0; i < str.length; i = i + 2) {
//     const currentCode = str.charCodeAt(i)
//     const nextCode = str.charCodeAt(i + 2)

//     if (nextCode - currentCode !== 1) {
//       result = String.fromCharCode(currentCode + 1)
//       break
//     }
//   }
//   return result
// }
// console.log(missingLetter(lowercase))
// console.log(missingLetter(captial))

// console.log(lowercase)
// console.log(captial)

// // console.log(captial)

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// # 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// # 範例：
// let list = [false,1,0,1,2,0,1,3,"a"]

// function moveZerosToEnd(arr) {
//   // 程式碼寫在這裡
// }

// let result = moveZerosToEnd(list)
// console.log(result)  // [false,1,1,2,1,3,"a",0,0]

const dictionary = ["a", "b", "x", "d", "e"]

//先找到x的位置，等會要用c來取代x
const xIndex = dictionary.indexOf("x")

//bIndex大於-1代表有存在，插入c，刪除x
if (xIndex > -1) {
  dictionary.splice(xIndex, 1, "c")
}
console.log(xIndex)
