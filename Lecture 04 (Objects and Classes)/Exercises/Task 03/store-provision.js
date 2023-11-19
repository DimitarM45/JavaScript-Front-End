function printQuantities(stock, delivery) {
  function addProducts(storage, products) {
    for (let i = 0; i < products.length - 1; i += 2) {
      if (storage.hasOwnProperty(products[i])) {
        storage[products[i]] += parseInt(products[i + 1]);
      } else {
        storage[products[i]] = parseInt(products[i + 1]);
      }
    }
  }

  let storage = {};

  addProducts(storage, stock);
  addProducts(storage, delivery);

  for (const key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}
