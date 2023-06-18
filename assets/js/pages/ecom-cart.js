let ProductInCart = localStorage.getItem("productsInCart");
let cartProducts = document.getElementById("cart-products");
let totalCart = document.getElementById("total-cart");
let cartEmpty = document.querySelector(".cart-empty");

if (ProductInCart) {
    let items = JSON.parse(ProductInCart);
    drawCartProductsUi(items);
}else{
    cartEmpty.style.display = "block";
}

function drawCartProductsUi(products) {
    let productsUi = products.map((item) => {
        return `
    <tr>
    <td>
        <div class="d-inline-block align-middle text-center">
            <img src="${item.imageUrl}" alt="cart-img"
                title="cart-img" class="rounded" height="90" />
            <br>
            <div class="btn-group btn-group-sm" role="group"
                aria-label="button groups sm">
                <button type="button" id="decrease"
                    onclick="decreaseValue('number')"
                    class="btn btn-secondary">-</button>
                <input class="wid-35 text-center" type="text" type="number"
                    id="number" value="0" />
                <button type="button" id="increase"
                    onclick="increaseValue('number')"
                    class="btn btn-secondary">+</button>
            </div>
        </div>
        <div class="d-inline-block align-middle m-l-10">
            <a href="#!" class="text-body">
                <h5 class="mb-1">${item.prod_name}</h5>
            </a>
            <p class="text-muted mb-1">Red, Black</p>
            <p class="text-muted mb-1">Seller: DZYN Furnitures</p>
            <h4>$139.58 <del class="text-muted font-weight-normal h5">
                    <small>$322.53</small></del> <small
                    class="text-success h5">86% off</small></h4>
            <a href="#!" class="text-muted text-h-primary mb-1">Save for
                later</a>
            <a href="#!" class="text-muted text-h-danger m-l-10 mb-1">Remove</a>
        </div>
    </td>
    <td class="text-right">
        <div class="text-left d-inline-block">
            <h6 class="my-2">Delivery by Sat Aug 17 | <span class="">$50</span>
            </h6>
            <small class="text-muted">10 Days Replacement Policy</small>
        </div>
    </td>
</tr>
        `;
    });
    cartProducts.innerHTML = productsUi;
    totalCart.innerHTML = "My Cart ( " + products.length + " )";
}
