function solve() {
    let buttonConvertElement = document.getElementsByTagName('button')[0];
    let numberInputElement = document.querySelector('#input');
    let selectedElement = document.querySelector('#selectMenuTo option');
    let selectedToMenuElement = document.querySelector('#selectMenuTo');
    let outputElement = document.querySelector('#result');
    selectedElement.remove();
    let optionBinaryEl = document.createElement('option');
    optionBinaryEl.value = 'binary';
    optionBinaryEl.textContent = 'Binary';
    selectedToMenuElement.appendChild(optionBinaryEl);
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    selectedToMenuElement.appendChild(optionHexadecimal);
    buttonConvertElement.addEventListener('click', onClick)

    function onClick() {
       
        if (selectedToMenuElement.value == 'binary') {
            let number = Number(numberInputElement.value);
            outputElement.value = number.toString(2);
        } else if (selectedToMenuElement.value == 'hexadecimal') {
            let number = Number(numberInputElement.value);
            outputElement.value = number.toString(16).toUpperCase();
        }
    }
    
}