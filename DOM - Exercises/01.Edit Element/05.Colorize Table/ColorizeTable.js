function colorize() {

    let evenElements = document.getElementsByTagName('tr');

    let arrayOfEvenEl = Array.from(evenElements);
    
    arrayOfEvenEl.forEach((el, index) => {

        if (index % 2 != 0) {
            el.style.backgroundColor = 'teal';
        }
    })
    
}