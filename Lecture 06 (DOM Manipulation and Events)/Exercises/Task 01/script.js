function create(words) {
   let contentElement = document.getElementById("content");
   
   for (let i = 0; i < words.length; i++) {
      let divElement = document.createElement("div");
      let paragraphElement = document.createElement("p");

      paragraphElement.textContent = words[i];

      paragraphElement.style.display = "none";

      divElement.appendChild(paragraphElement);
      
      divElement.addEventListener("click", showParagraph);
      
      contentElement.appendChild(divElement);
   }

   function showParagraph(e) {
      e.target.getElementsByTagName("p")[0].style.display = "block";
   }
}