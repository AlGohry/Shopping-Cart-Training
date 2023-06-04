'use strict';
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let regBtn = document.getElementById("signup-btn");

regBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please fill data ....")
    }
    else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        setTimeout(() => {
            window.location = "auth-signin.html";
        }, 1500);
    }
});