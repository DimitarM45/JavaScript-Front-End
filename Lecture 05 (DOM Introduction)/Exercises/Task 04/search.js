function search() {
   let listItems = Array.from(document.querySelectorAll("#towns li"));

   listItems.forEach(li => li.style.textDecoration = "");

   let searchElement = document.getElementById("searchText");

   let resultElement = document.getElementById("result");

   let matchCount = 0;
   
   listItems.forEach(li => {
      if (new RegExp(searchElement.value, "g").test(li.textContent)) {
         matchCount++;

         li.style.textDecoration = "underline";
         li.style.fontStyle = "bold";
      }
   });

   resultElement.textContent = `${matchCount} matches found`;
}
