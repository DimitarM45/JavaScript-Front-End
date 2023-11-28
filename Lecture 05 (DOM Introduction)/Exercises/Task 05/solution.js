function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = Array.from(document.querySelectorAll("tbody tr"));

      tableRows.forEach(e => e.className = "");

      let inputElement = document.getElementById("searchField");

      tableRows.forEach(e => {
         if (new RegExp(inputElement.value, "g").test(e.textContent)) {
            e.className += "select"
         }
      });
   }
}