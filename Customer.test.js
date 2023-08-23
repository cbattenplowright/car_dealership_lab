const Customer = require('./Customer');
const Car = require('./Car');

let customer;
let car;

beforeEach(() => {
    customer = new Customer("Jimbob", 200_000);
    car = new Car("911", "Porsche", 150_000, "diesel");
});


test('can buy car', () => {

    buyCar = customer.buyCar(car);
    // tests that car gets set to this.car property of customer
    expect(customer.getCar()).toBe(car);
    // tests that car price is subtracted from wallet
    expect(customer.getWallet()).toBe(50_000);
    // tests the return output of the function if car is purchased
    expect(buyCar).toBe(`You have just purchased the ${car.getManufacturer} ${car.getModel} and have ${customer.wallet} remaining in you wallet`);

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