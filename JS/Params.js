function multiply(aparam1, param2 = 1) {
    return param1 * param2;
  }
  
  param1 = 10;
  param2 = 25;
  console.log("The product is ", multiply(10, 25));
  
  param1 = 25;
  console.log("The product is ", multiply(25));
  