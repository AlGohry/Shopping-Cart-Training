"use strict";

let products = [
  {
    id: 1,
    // prod_mg:"assets/images/product/prod-1.jpg",
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
    // prod_mg:"assets/images/product/prod-2.jpg",
    imageUrl: "assets/images/product/prod-2.jpg",
    prod_name: "Minicap Dining Chair",
    prod_category: "Wooden Chairs",
    prod_date: "December 16, 2003",
    prod_price: "$59",
    prod_quantity: "90",
    prod_status: "Deactive",
  },
];

function drawProductsUi() {
    let productsUi = products.map((item) =>{
        return `
        
        `
    });
}