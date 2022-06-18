function validate() {

    let inputElement = document.getElementById('email');
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/g;

    inputElement.addEventListener('change', e => {

        if (e.target.value.match(pattern) !== null) {
            e.target.removeAttribute('class');
        } else {
            e.target.className = 'error';
        }
    })

}