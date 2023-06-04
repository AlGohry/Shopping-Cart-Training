'use strict';
let authUserName = document.getElementById("auth-username");


let username = localStorage.getItem ("username");
if (username) {
    authUserName.innerHTML = username;
}else{
    authUserName.innerHTML = ("Null");
}