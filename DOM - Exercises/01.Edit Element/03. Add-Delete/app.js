function addItem() {

    let ulItemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liEl = document.createElement('li');
    liEl.textContent = inputElement.value;
    let anchorLink = document.createElement('a');
    anchorLink.href = '#';
    anchorLink.textContent = '[Delete]';
    liEl.appendChild(anchorLink);
    ulItemsElement.appendChild(liEl);

    anchorLink.addEventListener('click', onClick);

    function onClick() {
        anchorLink.parentElement.remove();
    }
}