function sumTable() {
  let pricesElems = document.querySelectorAll("tbody tr td:nth-child(2)");

  pricesElems = Array.from(pricesElems);

  let sum = 0;

  for (let i = 0; i < pricesElems.length; i++) {
    sum += Number(pricesElems[i].textContent);
  }

  let sumElement = document.getElementById("sum");

  sumElement.textContent = sum;
}
