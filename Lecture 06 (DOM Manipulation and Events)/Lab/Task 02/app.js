function deleteByEmail() {
    let tableRows = Array.from(document.querySelectorAll("tbody tr"));

    let inputEmailAddress = document.querySelector('input[name="email"]').value;

    let isRemoved = false;

    for (let i = 0; i < tableRows.length; i++) {
        let emailCell = tableRows[i].children[1];

        console.log(emailCell.textContent);

        if (emailCell.textContent === inputEmailAddress) {
            tableRows[i].remove();

            isRemoved = true;
        }
    }

    let resultElement = document.getElementById("result");

    if (isRemoved) {
        resultElement.textContent = "Deleted";  
    } else {
        resultElement.textContent = "Not found.";
    }
} 