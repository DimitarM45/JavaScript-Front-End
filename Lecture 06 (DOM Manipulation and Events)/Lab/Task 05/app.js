function focused() {
    let inputElements = Array.from(document.getElementsByTagName("input"));

    inputElements.forEach(e => {
        e.addEventListener("focus", changeColor);
        e.addEventListener("blur", removeColor);
    })

    function changeColor(e) {
        e.target.parentNode.className = "focused";
    }

    function removeColor(e) {
        e.target.parentNode.className = "";
    }
}