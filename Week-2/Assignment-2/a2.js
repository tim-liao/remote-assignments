function avg(data) {
  // your code here
  let productsArray = data.products;
  let priceSum = 0;
  for (let i = 0; i < productsArray.length; i++) {
    priceSum += productsArray[i].price;
  }
  let priceAverage = priceSum / productsArray.length;
  return priceAverage;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
