function solve() {
  let textElements = document.getElementById("text").value.split(" ");

  let resultElement = document.getElementById("result");

  let namingConvention = document.getElementById("naming-convention").value;

  switch (namingConvention) {
    case "Pascal Case":
      resultElement.innerHTML = textElements
        .map(str => str[0].toUpperCase() + str.substring(1).toLowerCase())
        .join("");
      break;

    case "Camel Case":
      resultElement.innerHTML += textElements[0].toLowerCase();

      for (let i = 1; i < textElements.length; i++) {
        resultElement.innerHTML +=
          textElements[i][0].toUpperCase() +
          textElements[i].substring(1).toLowerCase();
      }
      break;

    default:
      resultElement.innerHTML = "Error!";
      break;
  }
}
