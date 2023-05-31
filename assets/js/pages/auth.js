let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let regBtn = document.getElementById("signUp");

regBtn.addEventListener("click", function() {
    // e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please ....")
    }
    else{
        localStorage.setItem("UserName", username.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Password", password.value);

        setTimeout(() => {
            window.location = "index.html";
        }, 1500);
    }
});