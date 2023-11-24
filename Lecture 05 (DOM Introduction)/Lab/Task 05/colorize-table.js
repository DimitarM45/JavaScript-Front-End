function colorize() {
  let tableRowElems = Array.from(document.querySelectorAll("tr:nth-child(even)"));

  tableRowElems.forEach(e => {
    e.style.background = "teal";
  })
}
