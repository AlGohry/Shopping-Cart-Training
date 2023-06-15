"use strict";
let productsDiv = document.getElementById("products");
let product_name = document.querySelector(".notification .prod-name strong");
let product_img = document.querySelector(".media .prod-imageUrl");
let badgeCart = document.querySelector(".badge-cart");
let cartEmptyMsg = document.getElementById("cart-empty-msg");
let shoppingCart = document.getElementById("shopping-cart");
let totalCart = document.querySelectorAll(".notification");

// JSON.parse => String to Object
// JSON.stringify => Object to String

let products = [
  {
    id: 1,
    imageUrl: "assets/images/product/prod-1.jpg",
    prod_name: "Amazing Rolling Chair",
    prod_category: "Office Chairs",
    prod_date: "December 16, 2019",
    prod_price: "$597.66",
    prod_quantity: "5",
    prod_status: "Active",
  },
  {
    id: 2,
    imageUrl: "assets/images/product/prod-2.jpg",
    prod_name: "Minicap Dining Chair",
    prod_category: "Wooden Chairs",
    prod_date: "December 16, 2003",
    prod_price: "$59",
    prod_quantity: "90",
    prod_status: "Deactive",
  },
  {
    id: 3,
    imageUrl: "assets/images/product/prod-3.jpg",
    prod_name: "Marvel T-shirts",
    prod_category: "Man cloths",
    prod_date: "October 16, 2010",
    prod_price: "$12.00",
    prod_quantity: "222",
    prod_status: "Active",
  },
  {
    id: 4,
    imageUrl: "assets/images/product/prod-4.jpg",
    prod_name: "Lonaval jacket",
    prod_category: "Man cloths",
    prod_date: "October 16, 2018",
    prod_price: "$14.99",
    prod_quantity: "111",
    prod_status: "Active",
  },
];
let selected_list = [];

function drawProductsUi() {
  // debugger;
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
                <a href="#" class="btn btn-icon btn-outline-primary hidden " title="View"><i class="feather icon-eye"></i></a>
                <a href="#" class="btn btn-icon btn-outline-success hidden " title="Edite"><i class="feather icon-edit"></i></a>
                <a href="#" class="btn btn-icon btn-outline-danger hidden " title="Delete"><i class="feather icon-trash-2"></i></a>
                <a href="#" class="btn btn-icon btn-outline-warning" onclick="addedToCart(${item.id})" title="Add to cart"><i class="feather icon-shopping-cart"></i></a>
            </td>
        </tr>
        `;
  });
  productsDiv.innerHTML = productsUi;
}

drawProductsUi();

let addedItem = [];

function addedToCart(id) {
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
