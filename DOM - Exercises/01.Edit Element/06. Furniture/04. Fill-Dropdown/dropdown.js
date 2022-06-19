function addItem() {
    let inputNameElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let selectMenuElement = document.getElementById('menu');
    let option = document.createElement('option');
    option.textContent = inputNameElement.value;
    option.value = inputValueElement.value
    selectMenuElement.appendChild(option);
    inputNameElement.value = '';
    inputValueElement.value = '';
}