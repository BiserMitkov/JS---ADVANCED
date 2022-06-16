function solve() {
  let sentecesElement = document.getElementById('input');
  let outputElement = document.getElementById('output');
  let arrOfSentences = sentecesElement.value.split('.').filter(el => el != '');
  let counter = 0;
  let output = '';
  for (let sentence of arrOfSentences) {
    counter++;
    if (counter == 3) {
      output += ` ${sentence}.`;
      let p = document.createElement('p');
      p.textContent = output;
      outputElement.appendChild(p);
      counter = 0;
      output = '';
    } else {
      output += `${sentence}.`;
    }
  }
  if (output.length > 0) {
    let p = document.createElement('p');
    p.textContent = output;
    outputElement.appendChild(p);
  }

}