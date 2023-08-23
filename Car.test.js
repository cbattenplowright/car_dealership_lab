const Car = require('./Car');

let ferrari;

beforeEach(() => {
    ferrari = new Car('F40', 'Ferrari', 1_000_000, 'petrol');
});

describe('getters', () => {

    test('can get model', () => {

        expected = 'F40';
        actual = ferrari.getModel();
        expect(actual).toBe(expected);

    });

    test('can get manufacturer', () => {

        expected = 'Ferrari';
        actual = ferrari.getManufacturer();
        expect(actual).toBe(expected);

    });

    test('can get price', () => {

        expected = 1_000_000;
        actual = ferrari.getPrice();
        expect(actual).toBe(expected);

    });

    test('can get engine type', () => {

        expected = "petrol";
        actual = ferrari.getEngineType();
        expect(actual).toBe(expected);
    });
});

