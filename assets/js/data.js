"use strict";
// Definition of products
let productsDB = [
  {
    id: 1,
    imageUrl: "assets/images/product/prod-1.jpg",
    prod_name: "Amazing Rolling Chair",
    prod_category: "Office Chairs",
    prod_date: "December 16, 2019",
    prod_price: "$597.66",
    prod_quantity: 1,
    prod_status: "Active",
  },
  {
    id: 2,
    imageUrl: "assets/images/product/prod-2.jpg",
    prod_name: "Minicap Dining Chair",
    prod_category: "Wooden Chairs",
    prod_date: "December 16, 2003",
    prod_price: "$59",
    prod_quantity: 1,
    prod_status: "Deactive",
  },
  {
    id: 3,
    imageUrl: "assets/images/product/prod-3.jpg",
    prod_name: "Marvel T-shirts",
    prod_category: "Man cloths",
    prod_date: "October 16, 2010",
    prod_price: "$12.00",
    prod_quantity: 1,
    prod_status: "Active",
  },
  {
    id: 4,
    imageUrl: "assets/images/product/prod-4.jpg",
    prod_name: "Lonaval jacket",
    prod_category: "Man cloths",
    prod_date: "October 16, 2018",
    prod_price: "$14.99",
    prod_quantity: 1,
    prod_status: "Active",
  },
];

localStorage.setItem("products", JSON.stringify(productsDB));