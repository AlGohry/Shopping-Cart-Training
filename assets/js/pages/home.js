"use strict";
let authUserName = document.getElementById("auth-username");
let logout = document.getElementById("logout");
let username = localStorage.getItem("username");

//----- Fill Data ( Full Name & Desc ) Function
if (username) {
    authUserName.innerHTML = username;
} else {
    authUserName.innerHTML = "Null";
}

//----- Logout Function
logout.addEventListener("click", logoutFunc);

function logoutFunc() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "auth-signin.html";
    }, 1500);
}