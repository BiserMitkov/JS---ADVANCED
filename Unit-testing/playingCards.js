function cardFactory(face, suit) {

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

    if (!cardObj.faces.includes(face) || !cardObj.hasOwnProperty(suit)) {
        throw new Error('Error');
    } else {
        return cardObj.toString(face, cardObj[suit]);
    }

}
cardFactory('2', 'C')