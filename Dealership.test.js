const Dealership = require('./Dealership');
const Car = require("./Car");

let dealership;
let mercedes;

beforeEach(() => {
    mercedes = new Car("C63", "Mercedes", 180_000, "petrol");
    dealership = new Dealership("Carlo's", 10, [mercedes]);
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
        
        expected = [mercedes];
        actual = dealership.getCarStock();
        expect(actual).toEqual(expected);

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

    test('can set Car stock', () => {

        ford = new Car("GT40", "Ford", 150_000, "petrol");
        ferrari = new Car('F40', 'Ferrari', 1_000_000, 'petrol');

        dealership.setCarStock([ford, ferrari]);

        expected = 2;
        actual = dealership.getCarStock().length;
        expect(actual).toBe(expected);

    });

});