function solve() {
  let wordsElement = document.getElementById('text').value.toLowerCase();
  let currCase = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  if (currCase == 'Pascal Case') {

    let counterForSpaces = 0;
    let counterForCounter = 0;
    let pascalCaseResult = '';
    let length = wordsElement.length;

    for (let i = 0; i < length; i++) {

      if (i == 0) {
        pascalCaseResult += wordsElement[i].toUpperCase();
      } else if (wordsElement[i] == ' ') {
        counterForSpaces++;
        continue;
      } else if (counterForSpaces > counterForCounter) {
        counterForCounter = counterForSpaces;
        pascalCaseResult += wordsElement[i].toUpperCase();
      } else {
        pascalCaseResult += wordsElement[i];

      }
    }
    return resultElement.textContent = pascalCaseResult;
  } else if (currCase == 'Camel Case') {
    let counterForSpaces = 0;
    let counterForCounter = 0;
    let camelCaseResult = '';
    let length = wordsElement.length;
    for (let i = 0; i < length; i++) {

      if (wordsElement[i] == ' ') {
        counterForSpaces++;
        continue;
      } else if (counterForSpaces > counterForCounter) {
        counterForCounter = counterForSpaces;
        camelCaseResult += wordsElement[i].toUpperCase();
      } else {
        camelCaseResult += wordsElement[i];
      }
    }
    return resultElement.textContent = camelCaseResult;
  } else {
    return resultElement.textContent = 'Error!'
  }

}




