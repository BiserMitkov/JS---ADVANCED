function encodeAndDecodeMessages() {
    let textAreasElements = document.querySelectorAll('#main textarea');
    let buttonsElements = document.querySelectorAll('#main button');

    buttonsElements[0].addEventListener('click', encode);
    let textForDecode = '';
    function encode(e) {
        for (let letter of textAreasElements[0].value) {
            letter = letter.charCodeAt();
            letter++;
            letter = String.fromCharCode(letter);
            textForDecode += letter;
        }
        textAreasElements[1].value = textForDecode;
        textAreasElements[0].value = '';
        textForDecode = '';
    }

    buttonsElements[1].addEventListener('click', decode);

    function decode() {
        for (let currL of textAreasElements[1].value) {
            currL = currL.charCodeAt();
            currL--;
            currL = String.fromCharCode(currL);
            textForDecode += currL;
        }
        textAreasElements[1].value = textForDecode;
    }
};