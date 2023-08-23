const Dealership = require('./Dealership');

let dealership;

beforeEach(() => {
    dealership = new Dealership("Carlo's", 10, []);
});

describe('getters', () => {

    test('can get name', () => {

        expected = "Carlo's";
        actual = dealership.getName();
        expect(actual).toBe(expected);

    });

    test('can get capacity', () => {

        expected = 10;
        actual = dealership.getCapacity();
        expect(actual).toBe(expected);

    });

    test('can get car stock', () => {

        actual = dealership.getCarStock();
        expect(actual).toHaveLength(0);

    });

});