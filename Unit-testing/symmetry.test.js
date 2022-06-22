const isSymmetric = require('./symmetry.js');
const { expect } = require('chai');

describe('testing symmetry function', () => {

    it('works with symmetric numeric arr', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric numeric arr', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-arr', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('works with symmetric odd-length arr', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symmetric string arr', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for string param', () => {
        expect(isSymmetric('avadasd')).to.be.false;
    });

    it('returns false for type mismatched elements', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
})