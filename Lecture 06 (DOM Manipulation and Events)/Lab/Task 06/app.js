function validate() {
    let inputElement = document.getElementById("email");

    inputElement.addEventListener("change", changeValidationState);
    
    function changeValidationState(e) {
        let emailRegex = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (!emailRegex.test(e.target.value)) {
            e.target.className = "error";
        } else {
            e.target.className = "";
        }
    }
}