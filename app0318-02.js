// const url = "https://jsonplaceholder.typicode.com/users"

// const req = new XMLHttpRequest({
//     url
// })
// const API = "https://jsonplaceholder.typicode.com/users"

// const req = new XMLHttpRequest()

// req.addEventListener("load", () => {
//   const ul = document.createElement("ul")

//   let users = JSON.parse(req.responseText)
//   users.forEach((user) => {
//     const li = document.createElement("li")
//     li.textContent = user.name
//     ul.appendChild(li)
//   })
//   document.querySelector("body").appendChild(ul)
// })

// req.open("GET", API)

// req.send()

// const API = "https://jsonplaceholder.typicode.com/users"

// const a = fetch(API)
// a.then((resp) => {
//   console.log(resp)
// })

// fetch(API)
//   .then((resp) => {
//     return resp.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log("fail------" + err)
//   })

// const parser = (resp) => resp.json()
// const logger = (data) => {
//   console.log(data)
// }

// const catcher = (err) => {
//   console.log("fail----" + err)
// }

// fetch(API).then(parser).then(logger).catch(catcher)

//async /await
const API = "https://jsonplaceholder.typicode.com/users"

async function getUsers() {
  const rawData = await fetch(API)
  const users = await rawData.json()
  users.forEach((user) => {
    console.log(user.name)
  })
}
getUsers()
