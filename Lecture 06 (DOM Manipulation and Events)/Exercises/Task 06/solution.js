function solve() {
  let generateButtonElement = document.getElementsByTagName("button")[0];

  generateButtonElement.addEventListener("click", generateFurnitureObjEntry);

  let buyButtonElement = document.getElementsByTagName("button")[1];

  buyButtonElement.addEventListener("click", buyFurniture);

  function generateFurnitureObjEntry(e) {
    let inputTextAreaElement = e.target.parentNode
      .querySelector("#exercise textarea");

    let furnitureObjs = JSON.parse(inputTextAreaElement.value);

    let tableBodyElement = e.target.parentNode
      .querySelector("tbody");

    for (let i = 0; i < furnitureObjs.length; i++) {
      let imageTableCellElement = document.createElement("td");
    
      let imageElement = document.createElement("img");
      
      imageElement.src = furnitureObjs[i].img;

      imageTableCellElement.appendChild(imageElement);

      let tableRowElement = document.createElement("tr");

      tableRowElement.appendChild(imageTableCellElement);

      delete furnitureObjs[i].img;
      
      for (const key in furnitureObjs[i]) {
        let tableCellElement = document.createElement("td");
        let paragraphElement = document.createElement("p");
        
        paragraphElement.textContent = furnitureObjs[i][key];
        
        tableCellElement.appendChild(paragraphElement);
        
        tableRowElement.appendChild(tableCellElement);
      }

      let checkElementCell = document.createElement("td");
      
      let tableCheckElement = document.createElement("input");

      tableCheckElement.type = "checkbox";

      checkElementCell.appendChild(tableCheckElement);

      tableRowElement.appendChild(checkElementCell);

      tableBodyElement.appendChild(tableRowElement);
    }
  }

  function buyFurniture(e) {
    let allTableRows = Array.from(e.target.parentNode.querySelectorAll("tbody tr"));

    checkedTableRows = [];

    allTableRows.forEach(tr => {
      if (tr.querySelector("input").checked) {
        checkedTableRows.push(tr);
      }
    });

    let boughtProducts = [];

    checkedTableRows.forEach(r => {
      let productName = r.getElementsByTagName("p")[0];
      let productPrice = r.getElementsByTagName("p")[1];
      let productDecorationFactor = r.getElementsByTagName("p")[2];

      let product = {
        name: productName.textContent,
        price: Number(productPrice.textContent),
        decFactor: Number(productDecorationFactor.textContent),
      }

      boughtProducts.push(product);
    });

    let totalPrice = 0;
    let averageDecFactor = 0;

    boughtProducts.forEach(p => {
      totalPrice += p.price;

      averageDecFactor += p.decFactor;
    })

    averageDecFactor /= boughtProducts.length;

    let purchaseTextareaElement = e.target.parentNode.getElementsByTagName("textarea")[1];

    purchaseTextareaElement.value = "";

    purchaseTextareaElement.value += 
      `Bought furniture: ${boughtProducts.map(p => p.name).join(", ")}\n`;

    purchaseTextareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    purchaseTextareaElement.value += `Average decoration factor: ${averageDecFactor}`;
  }
}