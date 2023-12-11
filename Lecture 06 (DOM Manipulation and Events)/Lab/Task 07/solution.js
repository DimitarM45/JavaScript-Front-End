function solve() {
   let addButtonElements = Array.from(document.querySelectorAll(".add-product"));
   
   addButtonElements.forEach(b => {
      b.addEventListener("click", addToCart);
   })

   let boughtProducts = [];

   let checkoutBtnElement = document.querySelector(".checkout");

   checkoutBtnElement.addEventListener("click", checkout);

   function addToCart(e) {
      let textAreaElement = document.getElementsByTagName("textarea")[0];

      let productNameElement = e.target
         .parentNode
         .parentNode
         .querySelector(".product-details .product-title");

      let productPriceElement = e.target
         .parentNode
         .parentNode
         .querySelector(".product-line-price");

      textAreaElement.value += 
         `Added ${productNameElement.textContent} for ${Number(productPriceElement.textContent).toFixed(2)} to the cart.\n`;

      let boughtProductIndex = boughtProducts.findIndex(p => p.name === productNameElement.textContent);

      if (boughtProductIndex == -1) {
         let productObj = {
            name: productNameElement.textContent,
            price: Number(productPriceElement.textContent),
            quantity: 1
         }

         boughtProducts.push(productObj);

      } else {
         boughtProducts[boughtProductIndex].quantity++;
      }
   }

   function checkout(e) {
      let textAreaElement = document.getElementsByTagName("textarea")[0];

      let buttonElements = Array.from(
         e.target.parentNode.querySelectorAll(".add-product")
      );

      buttonElements.forEach(be => {
         be.disabled = "disabled";

         be.removeEventListener("click", addToCart);
      });

      e.target.disabled = "disabled";
      e.target.removeEventListener("click", checkout);

      let productsString = boughtProducts
         .map(bp => bp.name)
         .join(", ");

      let totalPrice = 0;

      boughtProducts.forEach(bp => {
         totalPrice += bp.price;
      });

      textAreaElement.value += `You bought ${productsString} for ${totalPrice.toFixed(2)}.`;
   }
}