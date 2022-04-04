const form = document.querySelector("#submit")

import CC from "axios"

// ---------------------------資料

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email").value
  console.log(email)
  const nickname = document.querySelector("#nickname").value
  console.log(nickname)
  const password = document.querySelector("#password").value
  console.log(password)

  if (email.trim() !== "" && password.trim() !== "") {
    const userData = {
      user: {
        email,
        nickname,
        password,
      },
    }
    // fetch("https://todoo.5xcamp.us/users", {
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //     }),
    //   })
    //     .then((resp) => {
    //       return resp.json()
    //     })
    //     .then((data) => {
    //       console.log(data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })

    CC.post("https://todoo.5xcamp.us/users", userData).then(({ data }) => {
      console.log(data)
      const token = document.querySelector("#token")
    })
  }
})

// ---------------------------登入

const loginform = document.querySelector("#logInForm")

loginform.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.querySelector("#loginemail").value
  console.log(email)
  const password = document.querySelector("#loginpassword").value
  console.log(password)

  if (email.trim() !== "" && password.trim() !== "") {
    const userData = {
      user: {
        email,
        password,
      },
    }
    CC.post("https://todoo.5xcamp.us/users/sign_in", userData).then((resp) => {
      // const token = document.querySelector("#tokenArea").textContent = resp.headers.authorization

      const token = resp.headers.authorization
      localStorage.setItem("recordToken", token)
      document.querySelector("#result").textContent = resp.data.message
    })
  }
})

// ---------------------------檢查登入

document.querySelector("#checkForm").addEventListener("submit", (e) => {
  e.preventDefault()

  // const token = document.querySelector("#tokenArea").value

  const token = localStorage.getItem("recordToken")

  if (token) {
    CC.get("https://todoo.5xcamp.us/check", {
      headers: {
        Authorization: token,
      },
    })
      .then((resp) => {
        document.querySelector("#result").textContent = resp.data.message
      })
      .catch(
        (err) => (document.querySelector("#result").textContent = "登入失敗")
      )
  }
})

document.querySelector("#logOutForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const token = localStorage.getItem("recordToken")

  CC.delete("https://todoo.5xcamp.us/users/sign_out", {
    headers: {
      Authorization: token,
    },
  }).then((resp) => {
    document.querySelector("#result").textContent = resp.data.message
  })
})

document.querySelector("#todoForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const todo = document.querySelector("#todoForm")
  const token = localStorage.getItem("todo-token")

  const todoData = {
    todo: {
      content: todo.value.trim(),
    },
  }
  CC.post("https://todoo.5xcamp.us/users/todos", todoData, {
    headers: {
      Authorization: token,
    },
  })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

document.querySelector("#todoForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const todo = document.querySelector("#todoInput")
  const token = localStorage.getItem("todo-token")
  const todoData = {
    todo: {
      content: todo.value.trim(),
    },
  }
  CC.post("https://todoo.5xcamp.us/todos", todoData, {
    headers: {
      Authorization: token,
    },
  })
    .then(({ data }) => {
      const li = document.querySelector("#todoInput")
      data.todoInput.forEach((todo) => {
        const li = `<li>${todo.content}</li>`
        ul.inserAdjacentHTML("beforeend", li)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
