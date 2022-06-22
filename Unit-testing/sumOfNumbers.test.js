const sum = require('./sumOfNumbers.js');
const { expect } = require('chai');

describe('array of numbers', () => {

    it('sum to be correct', () => {
        expect(sum([1, 2, 3])).to.equal(6, 'works with 1, 2, 3')
    });
    it('sum to be correct', () => {
        expect(sum([4, 5, 6])).to.equal(15, 'works with 4,5,6')
    });
    it('sum to be correct', () => {
        expect(sum([0])).to.equal(0, 'works with 0')
    });

});