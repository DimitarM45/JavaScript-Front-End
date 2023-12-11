function addItem() {
    let selectElement = document.getElementById("menu");

    let textInputElement = document.getElementById("newItemText");
    let valueInputElement = document.getElementById("newItemValue");

    let newOptionElement = document.createElement("option");

    newOptionElement.textContent = textInputElement.value;
    newOptionElement.value = valueInputElement.value;

    textInputElement.value = "";
    valueInputElement.value = "";

    selectElement.appendChild(newOptionElement); 
}