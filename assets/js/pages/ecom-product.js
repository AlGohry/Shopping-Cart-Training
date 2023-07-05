"use strict";
let productsDiv = document.getElementById("products");
let product_name = document.querySelector(".notification .prod-name strong");
let product_img = document.querySelector(".media .prod-imageUrl");
let badgeCart = document.querySelector(".badge-cart");
let cartEmptyMsg = document.getElementById("cart-empty-msg");
let shoppingCart = document.getElementById("shopping-cart");
let totalCart = document.querySelectorAll(".notification");
let products = JSON.parse(localStorage.getItem('products'));

let selected_list = [];

// View products when opening the page 
(function drawProductsUi() {
  let productsUi = products.map((item) => {
    return `
        <tr>
          <td class="align-middle">
              <img src="${item.imageUrl}" id="prod-img" alt="prod-1-img" title="prod-1-img" class="rounded mr-3" height="48" />
              <p class="m-0 d-inline-block align-middle font-16">
                  <a href="ecom-product-details.html" class="text-body" id="prod-name">${item.prod_name}</a>
                  <br />
                  <span class="text-warning feather icon-star-on"></span>
                  <span class="text-warning feather icon-star-on"></span>
                  <span class="text-warning feather icon-star-on"></span>
                  <span class="text-warning feather icon-star-on"></span>
                  <span class="text-warning feather icon-star-on"></span>
              </p>
            </td>
            <td class="align-middle" id="prod-category">
                ${item.prod_category}
            </td>
            <td class="align-middle" id="prod-date">
                ${item.prod_date}
            </td>
            <td class="align-middle" id="prod-price">
                ${item.prod_price}
            </td>
            <td class="align-middle" id="prod-quantity">
                ${item.prod_quantity}
            </td>
            <td class="align-middle">
                <span class="badge badge-success" id="prod-status">${item.prod_status}</span>
            </td>
            <td class="table-action">
                <button class="btn btn-icon btn-outline-primary hidden " title="View"><i class="feather icon-eye"></i></button>
                <button class="btn btn-icon btn-outline-success hidden " title="Edite"><i class="feather icon-edit"></i></button>
                <button class="btn btn-icon btn-outline-danger hidden " title="Delete"><i class="feather icon-trash-2"></i></button>
                <button class="btn btn-icon btn-outline-warning" onclick="addedToCart(${item.id})" title="Add to cart"><i class="feather icon-shopping-cart"></i></button>
            </td>
        </tr>
        `;
  });
  productsDiv.innerHTML = productsUi;
})();

let addedItem = [];

// Add to Cart
function addedToCart(id) {
  // Check for an existing username?
  if (localStorage.getItem("username")) {
    let selected_item = products.find((item) => item.id === id);
    selected_list.push(selected_item);
    cartEmptyMsg.style.display = "none";
    let putProductInCart = selected_list.map((item) => {
      return `
    <li class="notification">
      <div class="media">
        <img class="img-radius prod-imageUrl" src="${item.imageUrl}"
          alt="Generic placeholder image">
        <div class="media-body">
          <p class="prod-name">
            <strong>${item.prod_name}</strong>
            <span class="n-time text-muted">
              <i class="icon feather icon-clock m-r-10"></i>
              10 min
            </span>
          </p>
          <p>Category: ${item.prod_category}</p>
        </div>
      </div>
    </li>
    `;
    });
    shoppingCart.innerHTML = putProductInCart;
    addedItem=[...addedItem, selected_item];
    localStorage.setItem('productsInCart', JSON.stringify(addedItem));
    badgeCart.innerHTML = selected_list.length;
  } else {
    window.location = "auth-signin.html";
  }
}

// Fill the products in the shopping cart
(function fillProductsInCart() {
  // debugger;
  let productsUi = [];
  var productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  if (productsInCart != null) {
    productsUi = productsInCart.map((item) => {
      return `
      <li class="notification">
      <div class="media">
        <img class="img-radius prod-imageUrl" src="${item.imageUrl}"
          alt="Generic placeholder image">
        <div class="media-body">
          <p class="prod-name">
            <strong>${item.prod_name}</strong>
            <span class="n-time text-muted">
              <i class="icon feather icon-clock m-r-10"></i>
              10 min
            </span>
          </p>
          <p>Category: ${item.prod_category}</p>
        </div>
      </div>
    </li>
      `;
    });
    shoppingCart.innerHTML = productsUi;
    badgeCart.innerHTML = productsInCart.length;
  } else {
    badgeCart.innerHTML = 0;
  }
})();
