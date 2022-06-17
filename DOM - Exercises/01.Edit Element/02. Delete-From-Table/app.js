function deleteByEmail() {

    let emailsElements = document.querySelectorAll('td:nth-of-type(2)');
    let inputEmail = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');

    for (let email of emailsElements) {

        if (email.textContent == inputEmail.value) {
            email.parentElement.remove();
            resultElement.textContent = 'Deleted.'
        } else {
            resultElement.textContent = 'Not found.'
        }
    }
    inputEmail.value = '';
    
}