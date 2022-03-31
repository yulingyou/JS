//higher order function
const a = new Promise(function (ok, fail) {
  setTimeout(() => {
    ok()
  }, 1000)
})

console.log(a)
a.then((result) => {})

const aa = new Promise(function (ok, fail) {
  ok(123)
})

//pending fullfilled rejected
aa.then((v) => {
  console.log(v)
}).catch((er) => {
  console.log(er)
})

前後端分離
