const form = document.querySelector("#form")
const loginForm = document.querySelector("#loginForm")
const checkForm = document.querySelector("#checkForm")
import AX from "axios"
const token = localStorage.getItem("todo-token")
const checkData = {
    headers : {
        Authorization: token,
    }
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    const email = document.querySelector("#email")
    const nickname = document.querySelector("#nickname")
    const password = document.querySelector("#password")

    if (email.value.trim() !== "" && password.value.trim() !=="") {
        const userData = {
             user: {
            email: email.value,
            nickname: nickname.value,
            password: password.value,
            }
          }
          AX.post( 'https://todoo.5xcamp.us/users' , userData)
          .then(function(resp){
             console.log(resp.data)
            }).catch((err) => {
                console.log(err)
            })
    }
})

loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const email = document.querySelector("#login_email")
    
    const password = document.querySelector("#login_password")

    if (email.value.trim() !== "" && password.value.trim() !=="") {
        const userData = {
             user: {
            email: email.value,
            password: password.value,
            }
          }
          AX.post( 'https://todoo.5xcamp.us/users/sign_in' , userData)
          .then(function(resp){
              const token = resp.headers.authorization
            //   document.querySelector("#token").value = token
            localStorage.setItem("todo-token" , token)
            console.log("登入成功")
            }).catch((err) => {
                console.log(err)
            })
    }
})

checkForm.addEventListener("submit",function(e){
e.preventDefault()
// const token = document.querySelector("#token").value

console.log(token)
if(token){
  
    AX.get('https://todoo.5xcamp.us/check', checkData)
    .then(({data}) => {
        document.querySelector("#result").textContent = data.message
    })
   }

})

document.querySelector("#logoutForm").addEventListener("submit", (e) => {
    e.preventDefault()
    
    const token = localStorage.getItem("todo-token")
    const checkData = {
        headers : {
            Authorization: token,
        }
    }
    AX.delete('https://todoo.5xcamp.us/users/sign_out', checkData)
    .then((resp) =>{
        localStorage.setItem("todo-token", "")
        console.log("登出成功")
    })
    .catch((err) => {
        console.log(err)
    })
})

document.querySelector("#todoForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const todoList = document.querySelector("#todo_list")
    // const token = localStorage.getItem("todo-token")
   
    const todoData = {
        "todo": {
            "content": todoList.value
          }
    }

    // todo.value = ""
    // todo.focus()

    AX
    .post('https://todoo.5xcamp.us/todos', todoData,checkData)
    .then(function(resp){
        console.log("新增成功")
        const ul = document.querySelector("#todos")
        const li = `<li>${resp.data.content}</li>`

        ul.insertAdjacentHTML("afterbegin",li)
        // console.log(resp.data.content)
        e.target.reset()
     
    }).catch(function(err){
        console.log(err)
    })
})

if(token){
    AX
    .get('https://todoo.5xcamp.us/todos' ,checkData)
    .then(function({data}){
        const ul = document.querySelector("#todos")

        data.todos.forEach(function(todo){})
        const li = `<li>${data.todos}</li>`
        ul.insertAdjacentHTML("afterbegin",li)
        // console.log(data)
    
    })
}