function extract(content) {

    let extractedElement = document.getElementById('content');
    let text = extractedElement.textContent;
    let length = text.length;
    let result = [];
    for (let i = 0; i < length; i++) {

        if (text[i] == '(') {
            let currWord = '';
            for (let j = i + 1; j < length; j++) {

                if (text[j] == ')') {
                    result.push(currWord);
                    break;
                } else {
                    currWord += text[j];
                }
            }

        }
    }
    return result.join('; ');
}