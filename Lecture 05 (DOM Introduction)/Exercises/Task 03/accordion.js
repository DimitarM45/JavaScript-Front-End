function toggle() {
  let buttonElement = document.getElementsByClassName("button")[0];

  let div = document.getElementById("extra");

  buttonElement.textContent =
    buttonElement.textContent === "More" ? "Less" : "More";

  div.style.display = 
    div.style.display === "block" ? "none" : "block";
}
