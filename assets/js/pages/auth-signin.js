"use strict";
let email = document.getElementById("email");
let password = document.getElementById("password");
let signinBtn = document.getElementById("signin-btn");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("passowrd");

signinBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value === "" || password.value === "") {
        alert("This is a required field");
    } else {
        if (
            getEmail && 
            getEmail.trim() === "ah.algohry@gmail.com" &&
            getPassword &&
            getPassword === "123"
            ) {
            window.location("index.html");
        } else {
            alert("Email or Password is incorrect");
        }
    }
});
