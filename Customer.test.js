const Customer = require('./Customer');
const Car = require('./Car');

let customer;
let car;

beforeEach(() => {
    customer = new Customer("Jimbob", 200_000);
    car = new Car("911", "Porsche", 150_000, "diesel");
});


describe('getters', () => {

    test('can get name', () => {

        expected = "Jimbob";
        actual = customer.getName();
        expect(actual).toBe(expected);

    });

    test('can get wallet', () => {

        expected = 200_000;
        actual = customer.getWallet();
        expect(actual).toBe(expected);

    });

    test('can get car', () => {

        expected = null;
        actual = customer.getCar();
        expect(actual).toBe(expected);

    })
});

describe('setters', () => {

    test('can set name', () => {

        customer.setName("Ryan");
        expected = "Ryan";
        actual = customer.getName();
        expect(actual).toBe(expected);

    });

    test('can get wallet', () => {
    
        customer.setWallet(100_000);
        expected = 100_000;
        actual = customer.getWallet();
        expect(actual).toBe(expected);

    });

    test('can set car', () => {

        customer.setCar(car);
        expected = new Car("911", "Porsche", 150_000, "diesel");
        actual = customer.getCar();
        expect(actual).toEqual(expected);

    })
});