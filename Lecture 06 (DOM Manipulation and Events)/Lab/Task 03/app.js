function addItem() {
    let list = document.getElementById("items");

    let inputElement = document.getElementById("newItemText");

    let listItem = document.createElement("li");

    listItem.textContent = inputElement.value; 

    let deleteElement = document.createElement("a");

    deleteElement.href = "#";
    deleteElement.textContent = "[Delete]";

    deleteElement.addEventListener("click", deleteItem);

    listItem.appendChild(deleteElement);

    list.appendChild(listItem);

    function deleteItem(e) { e.target.parentNode.remove() };
}