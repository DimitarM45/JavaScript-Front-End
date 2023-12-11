function addItem() {
    let list = document.getElementById("items");

    let inputElement = document.getElementById("newItemText");

    let listItem = document.createElement("li");

    listItem.textContent = inputElement.value;

    list.appendChild(listItem);
}