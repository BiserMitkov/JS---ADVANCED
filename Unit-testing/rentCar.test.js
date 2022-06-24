const { rentCar } = require('./rentCar.js');
const { expect } = require('chai');

describe("Tests", () => {
    describe("testing searchCar func", () => {
        it("happy path", () => {
            expect(rentCar.searchCar(['a', 'b', 'c'], 'b')).to.equal(`There is ${['b'].length} car of model ${'b'} in the catalog!`);
            
        });

        it("throw error for invalid input", () => {
            expect(() => rentCar.searchCar(1, 'bmw')).to.throw();
            expect(() => rentCar.searchCar({}, 'bmw')).to.throw();
            expect(() => rentCar.searchCar([], {})).to.throw();
            expect(() => rentCar.searchCar(1, 1)).to.throw();
            expect(() => rentCar.searchCar('a', 'b')).to.throw();
        });

        it("throw error for no matching model", () => {
            expect(() => rentCar.searchCar(['a', 'b', 'c'], 'ab')).to.throw();
        });
    });

    describe('testing the calculate func', () => {
        it ('throw error if params are incorrect', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'bmw')).to.throw();
            expect(() => rentCar.calculatePriceOfCar([], 'bmw')).to.throw();
            expect(() => rentCar.calculatePriceOfCar({}, 'bmw')).to.throw();
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('bmw', 'bmw')).to.throw();
            expect(() => rentCar.calculatePriceOfCar([], {})).to.throw();
            expect(() => rentCar.calculatePriceOfCar('bmw', [])).to.throw();
            expect(() => rentCar.calculatePriceOfCar('bmw', {})).to.throw();
        });

        it("happy path", () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.deep.equal(`You choose Volkswagen and it will cost $40!`);
            
        });

        it('throws error if there is no such model', () => {
            expect(() => rentCar.calculatePriceOfCar('Honda', 2)).to.throw();
        });

    })

    describe('testing checkBudget', () => {
        it('throws error for incorrect params', () => {
            expect(() => rentCar.checkBudget('2', 2, 2)).to.throw();
            expect(() => rentCar.checkBudget('2', [], 2)).to.throw();
            expect(() => rentCar.checkBudget(2, {}, '2')).to.throw();
            expect(() => rentCar.checkBudget({}, [], '2')).to.throw();
            expect(() => rentCar.checkBudget('2', '2', '2')).to.throw();
        });

        it('happy path', () => {
            expect(rentCar.checkBudget(2, 2, 4)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(2, 3, 6)).to.equal('You rent a car!');
        });

        it('happy path', () => {
            expect(rentCar.checkBudget(2, 2, 3)).to.equal('You need a bigger budget!');
        });
    })
    
});
