"use strict";
let productsDiv = document.getElementById("products");
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
  }
];

function drawProductsUi() {
  // debugger;
    let productsUi = products.map((item) =>{
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
                <a href="#" class="btn btn-icon btn-outline-warning" onclick="checkLoggedUser()" title="Add to cart"><i class="feather icon-shopping-cart"></i></a>
            </td>
        </tr>
        `
    });
    productsDiv.innerHTML = productsUi;
}

drawProductsUi();

function checkLoggedUser() {
  if (localStorage.getItem("username")) {
    console.log("Adde to cart");
  }else{
    console.log("User didn't log in ")
  }
}