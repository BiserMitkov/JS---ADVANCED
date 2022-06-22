function printDeckOfCards(cards) {
    let output = [];
    let outputForErrors = [];
    function createCard(arr) {

        let cardObj = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
            toString(face, suit) {
                return face + suit;
            },
    
            'faces': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        }
        
        for (let card of arr) {
            if (card.includes('10')) {
                let currSuit = card.substring(card.length - 1);
                if (!cardObj.faces.includes('10') || !cardObj.hasOwnProperty(currSuit)) {
                    let result = `Invalid card: ${'10'}${currSuit}`;
                    outputForErrors.push(result);
                    return console.log(outputForErrors[0]);
                } else {
                    output.push(cardObj.toString('10', cardObj[currSuit]));
                }
            } else {
                let currFace = card[0];
                let currSuit = card[1];
                if (!cardObj.faces.includes(currFace) || !cardObj.hasOwnProperty(currSuit)) {
                    let result = `Invalid card: ${currFace}${currSuit}`;
                    outputForErrors.push(result);
                    return console.log(outputForErrors[0]);
                } else {
                    output.push(cardObj.toString(currFace, cardObj[currSuit]));
                }
            }
        }

        return console.log(output.join(' '));
    }
    return createCard(cards);
    
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])  