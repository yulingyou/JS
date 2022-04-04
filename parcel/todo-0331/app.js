const form = document.querySelector("form");
import CC from "axios";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#exampleInputEmail1");
  const password = document.querySelector("#exampleInputPassword1");

  if (email.value.trim() !== "" && password.value.trim() !== "") {
    const userData = {
      user: {
        email: email.value,
        password: password.value,
      },
    };

    // CC.post("https://todoo.5xcamp.us/users", userData).then((resp) =>{
    //     console.log(resp.data)

    // })

    // CC.post("https://todoo.5xcamp.us/users", userData).then((resp) =>{
    //     const data = resp.data
    //     console.log(data)

    // })

    // CC.post("https://todoo.5xcamp.us/users", userData).then((resp) =>{
    //     const { data } = resp
    //     console.log(data)

    // })

    CC.post("https://todoo.5xcamp.us/users", userData).then(({ data }) => {
      console.log(data);
    });

    // fetch("https://todoo.5xcamp.us/users", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //   }),
    // })
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
});
const loginForm = document.querySelector("login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const login_email = document.querySelector("#login_exampleInputEmail1");
  const login_password = document.querySelector("#login_exampleInputPassword1");

  if (login_email.value.trim() !== "" && login_password.value.trim() !== "") {
    const userData = {
      user: {
        email: login_email.value,
        password: login_password.value,
      },
    };

    CC.post("https://todoo.5xcamp.us/users/sign_in", userData).then((resp) => {
      const data = resp.data;
      const token = resp.headers.authorization;
      localStorage.setItem("todo-token", token);
      console.log("登入成功");
    });

    // fetch("https://todoo.5xcamp.us/users/sign_in", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //   }),
    // })
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
});

const token = localStorage.getItem("todo-token");

//1.打API
//2.清localStorage

document.querySelector("#logoutForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const token = localStorage.getItem("todo-token");
  CC.delete("https://todoo.5xcamp.us/users/sign_out");
});
