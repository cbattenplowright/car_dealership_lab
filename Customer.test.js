const Customer = require('./Customer');

let customer;

beforeEach(() => {
    customer = new Customer("Jimbob", 200_000);
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
});