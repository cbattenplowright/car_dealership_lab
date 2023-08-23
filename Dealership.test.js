const Dealership = require('./Dealership');
const Car = require("./Car");

let dealership;
let mercedes;

beforeEach(() => {
    mercedes = new Car("C63", "Mercedes", 180_000, "petrol");
    dealership = new Dealership("Carlo's", 10);
});


test('can add car to stock', () => {

    dealership.addCar(mercedes);
    expected = 1; 
    actual = dealership.getStockCount();
    expect(actual).toBe(expected);

});

test('can\'t add car to stock', () => {
    
    dealership.setCapacity(0);
    expected = "Unavailable space in dealership to add car to stock";
    actual = dealership.addCar(mercedes);
    expect(actual).toBe(expected);

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