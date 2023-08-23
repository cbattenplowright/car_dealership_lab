const Dealership = function (name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.carStock = [];
};

Dealership.prototype.addCar = function (car) {

    if (this.getStockCount() === this.capacity) {
        return "Unavailable space in dealership to add car to stock";
    } else {
        this.carStock.push(car);
    }

};

Dealership.prototype.filterByManufacturer = function (manufacturer) {
    const carsFilteredByManufacturer = this.carStock.filter((car) => {
        return car.getManufacturer() === manufacturer;
    });

    return carsFilteredByManufacturer;
};

Dealership.prototype.getCarManufacturers = function () {

    const carManufacturers = this.carStock.map((car) => { return car.manufacturer });
    return carManufacturers;
}

Dealership.prototype.getValueOfDealership = function () {

    const totalValue = this.carStock.reduce((accumulator, car) => accumulator + car.getPrice(), 0);
    return totalValue;
}

// GETTERS AND SETTERS

Dealership.prototype.getName = function () { return this.name };
Dealership.prototype.getCapacity = function () { return this.capacity };
Dealership.prototype.getStockCount = function () { return this.carStock.length };

Dealership.prototype.setName = function (name) { this.name = name };
Dealership.prototype.setCapacity = function (capacity) { this.capacity = capacity };

module.exports = Dealership;