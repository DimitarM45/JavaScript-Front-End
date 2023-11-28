function solve() {
  let textAreaSentences = document
    .getElementById("input").value
    .split(".")
    .filter(s => s)
    .map(s => s.trim() + '. ');

    let lastSentence = textAreaSentences[textAreaSentences.length - 1]; 

    textAreaSentences[textAreaSentences.length - 1] = lastSentence
        .slice(0, lastSentence.length - 1);

  let outputElement = document.getElementById("output");

  let formattedText = "";

  formattedText += "<p>"

  let currSentencesCount = 0;

  for (let i = 0; i < textAreaSentences.length; i++) {
    if (currSentencesCount == 3) {
      formattedText += "</p><p>"; 

      currSentencesCount = 0;
    }

    formattedText += textAreaSentences[i];

    currSentencesCount++;
  }
  
  formattedText += "</p>";

  outputElement.innerHTML = formattedText;
}



