let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let product_name = document.getElementById("prod-name");
let productDetails = products.find((item) => item.id == productId);

// debugger;
product_name.innerHTML = productDetails.prod_name;