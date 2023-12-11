class Storage {
  constructor(capacity) {
    this.capacity = capacity;
  }

  capacity;

  storage = [];

  get totalCost() {
    let totalCost = 0;

    this.storage.forEach(p => totalCost += p.price * p.quantity);

    return totalCost
  }

  addProduct = function (product) {
    this.storage.push(product);

    this.capacity -= product.quantity;
  };

  getProducts = function () {
    let result = "";

    this.storage.forEach(p => result += JSON.stringify(p) + "\n");

    return result.trim();
  };
}
