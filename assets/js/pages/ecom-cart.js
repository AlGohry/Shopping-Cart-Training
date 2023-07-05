let ProductInCart = localStorage.getItem("productsInCart");
let cartProducts = document.getElementById("cart-products");
let totalCart = document.getElementById("total-cart");
let cartEmpty = document.getElementById("cart-empty");
let shoppingCart = document.getElementById("shopping-cart");
let badgeCart = document.querySelector(".badge-cart");

// JSON.parse => String to Object
// JSON.stringify => Object to String

// Check if there are products in the cart?
if (ProductInCart) {
  let items = JSON.parse(ProductInCart);
  drawCartProductsUi(items);
} else {
  cartEmpty.style.display = "flex";
}

// View cart details
function drawCartProductsUi(allProducts = []) {
  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
  let productsUi = products.map((item) => {
    return `
    <tr>
    <td>
        <div class="d-inline-block align-middle text-center">
            <img src="${item.imageUrl}" alt="cart-img"
                title="cart-img" class="rounded" height="90" />
            <br>
            <div class="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                <button type="button" id="decrease" onclick="decreaseValue('number')" class="btn btn-secondary">-</button>
                <input class="wid-35 text-center" type="text" type="number" id="number" value="0" />
                <button type="button" id="increase" onclick="increaseValue('number')" class="btn btn-secondary">+</button>
            </div>
        </div>
        <div class="d-inline-block align-middle m-l-10">
            <a onclick="saveItemData(${item.id})" href="#!" class="text-body">
                <h5 class="mb-1">${item.prod_name}</h5>
            </a>
            <p class="text-muted mb-1">Red, Black</p>
            <p class="text-muted mb-1">Seller: DZYN Furnitures</p>
            <h4>$139.58 <del class="text-muted font-weight-normal h5">
              <small>$322.53</small></del> <small
              class="text-success h5">86% off</small>
            </h4>
            <a href="#!" class="text-muted text-h-primary mb-1">Save for later</a>
            <a href="#!" class="text-muted text-h-danger m-l-10 mb-1" onclick="removeFromCart(${item.id})">Remove</a>
        </div>
    </td>
    <td class="text-right">
        <div class="text-left d-inline-block">
            <h6 class="my-2">Delivery by Sat Aug 17 | <span class="">$50</span> </h6>
            <small class="text-muted">10 Days Replacement Policy</small>
        </div>
    </td>
</tr>
        `;
  });
  cartProducts.innerHTML = productsUi;
  totalCart.innerHTML = "My Cart ( " + products.length + " )";
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

// Remove from cart
function removeFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductsUi(filteredItems);
    badgeCart.innerHTML = filteredItems.length;
  }
}


function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location= "ecom-product-details.html";
}