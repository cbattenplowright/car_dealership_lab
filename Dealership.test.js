const Dealership = require('./Dealership');
const Car = require("./Car");

let dealership;
let mercedes;

beforeEach(() => {
    ferrari_F40 = new Car("F40", "Ferrari", 1_000_000, "petrol");
    ford = new Car("GT40", "Ford", 100_000, "petrol");
    mercedes = new Car("C63", "Mercedes", 180_000, "diesel");

    dealership = new Dealership("Carlo's", 10);

    dealership.addCar(ferrari_F40);
    dealership.addCar(ford);
    dealership.addCar(mercedes);
});


test('can add car to stock', () => {

    jaguar = new Car("F Type", "Jaguar", 250_000, "diesel");

    dealership.addCar(jaguar);
    expected = 4; 
    actual = dealership.getStockCount();
    expect(actual).toBe(expected);

});

test('can\'t add car to stock', () => {

    dealership.setCapacity(3);
    expected = "Unavailable space in dealership to add car to stock";
    actual = dealership.addCar(mercedes);
    expect(actual).toBe(expected);

});

test('can find all cars from a given manufacturer', () => {
    
    ferrari_F50 = new Car("F50", "Ferrari", 100_000, "diesel");
    dealership.addCar(ferrari_F50);
    expected = [ferrari_F40, ferrari_F50];
    actual = dealership.filterByManufacturer("Ferrari");
    expect(actual).toMatchObject(expected);
    
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
        
        expected = 3;
        actual = dealership.getStockCount();
        expect(actual).toBe(expected);

    });

    test('can get car manufacturers', () => {
    
        expected = ["Ferrari", "Ford", "Mercedes"];
        actual = dealership.getCarManufacturers();
        expect(actual).toMatchObject(expected);
    
    });

    test('can get total value of dealership', () => {

        expected = 1_280_000;
        actual = dealership.getValueOfDealership();
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