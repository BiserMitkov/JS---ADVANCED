function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secNumberElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    let firstNumber = Number(firstNumberElement.value);
    let secNumber = Number(secNumberElement.value);
    resultElement.textContent = firstNumber - secNumber;
}