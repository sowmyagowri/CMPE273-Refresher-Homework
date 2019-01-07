"use strict";

var product = Object.defineProperties({}, {
					productName: {
						value:"Crayons",
						writable:false,
                    },
                    productDiscount: {
						value:10,
						writable:true,
					},
					});

console.log("Product name is " + product.productName);
console.log("Product Discount is " + product.productDiscount + "%");

product.productDiscount = 20;
console.log("Changed Product Discount to " + product.productDiscount + "%");

//Trying to change the Product Name, throws a compilation error
product.productName = "Pen";