const Dealership = require('./Dealership');
const Car = require("./Car");

let dealership;
let mercedes;

beforeEach(() => {
    mercedes = new Car("C63", "Mercedes", 180_000, "petrol");
    dealership = new Dealership("Carlo's", 10);
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

    test('can get stock count', () => {
        
        expected = 0;
        actual = dealership.getStockCount();
        expect(actual).toBe(expected);

    });

});

describe('setters', () => {

    test('can set name', () => {

        dealership.setName("AutoTrader");
        expected = "AutoTrader";
        actual = dealership.getName();
        expect(actual).toBe(expected);

    });

    test('can set capacity', () => {

        dealership.setCapacity(50);
        expected = 50;
        actual = dealership.getCapacity();
        expect(actual).toBe(expected);

    });

});