function addItem() {
   let ulListElement = document.getElementById('items');
   let inputElement = document.getElementById('newItemText');
   let creatingLiEl = document.createElement('li');
   creatingLiEl.textContent = inputElement.value;
   ulListElement.appendChild(creatingLiEl);
}