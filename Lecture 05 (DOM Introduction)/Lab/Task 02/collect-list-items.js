function extractText() {
    let listItems = document.getElementsByTagName("li");

    listItems = Array.from(listItems);

    let textAreaElement = document.getElementById("result");

    for (let i = 0; i < listItems.length; i++) {
        textAreaElement.textContent += listItems[i].textContent + "\n";        
    }
}