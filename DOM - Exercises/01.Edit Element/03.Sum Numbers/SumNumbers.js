function calc() {
    let firstNumElement = document.getElementById('num1');
    let secNumElement = document.getElementById('num2');

    let firstNumber = Number(firstNumElement.value);
    let secNumber = Number(secNumElement.value);

    let sumElement = document.getElementById('sum');
    sumElement.value = firstNumber + secNumber;
}
