function calculateTotalPrice(product, quantity) {
    let options = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2
    };

    let productPrice = options[product];

    if (!productPrice) 
        return;
    
    let totalPrice = productPrice * quantity;

    console.log(totalPrice.toFixed(2));
}
