const { flowerShop } = require('./flowerShop.js');
const { expect } = require('chai');

describe('testing flowerShop', () => {
    describe('testing calcPriceOfFlowers func', () => {
        it('happy path', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 2, 1)).to.equal(`You need $${(2 * 1).toFixed(2)} to buy ${'a'}!`);
        });

        it('happy path', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, '2', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, '1')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('1', '2', '1')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers([], '2', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers({}, '2', 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('1', '2', 1)).to.throw();
        });
    });

    describe('testing checkFlowersAvailable', () => {
        it('happy path', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The ${'Rose'} are available!`);
        });

        it('returns message for flower wich is not in the arr', () => {
            expect(flowerShop.checkFlowersAvailable('a', ["Rose", "Lily", "Orchid"])).to.equal(`The ${'a'} are sold! You need to purchase more!`);
        });
    })

    describe('testing sellFlowers func', () => {
        it('happy path', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal("Lily / Orchid");
        });

        it('throw error for invalid params', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw();
        });
    });
})