function editElement(inputElement, match, replacer) {
    while (inputElement.textContent.includes(match)) {
        inputElement.textContent = inputElement.textContent.replace(match, replacer);
    }

}