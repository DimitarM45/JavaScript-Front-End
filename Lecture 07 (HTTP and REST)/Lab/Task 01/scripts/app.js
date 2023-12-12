function loadRepos() {
   let divElement = document.getElementById("res");

   const baseUrl = "https://api.github.com/users/testnakov/repos";

   fetch(baseUrl)
      .then((response) => {
         return response.text();
      })
      .then((result) => {
         divElement.textContent = result;
      })
      .catch((error) => {
         console.log(error);
      });
}