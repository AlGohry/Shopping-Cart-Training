"use strict";
let email = document.getElementById("email");
let password = document.getElementById("password");
let signinBtn = document.getElementById("signin-btn");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");


//----- Login Function
signinBtn.addEventListener("click", loginFunc);
function loginFunc(e) {
  e.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("This is a required field");
  } else {
    if (
      getEmail && getEmail.trim() === email.value 
      &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("Email or Password is incorrect");
    }
  }
}