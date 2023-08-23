const Car = function(model, manufacturer, price, engineType){
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
};

// GETTERS AND SETTERS

Car.prototype.getModel = function() { return this.model };
Car.prototype.getManufacturer = function() { return this.manufacturer };
Car.prototype.getPrice = function() { return this.price };
Car.prototype.getEngineType = function () { return this.engineType };

Car.prototype.setModel = function(model) { this.model = model };
Car.prototype.setManufacturer = function (manufacturer) { this.manufacturer = manufacturer };
Car.prototype.setPrice = function(price) { this.price = price };
Car.prototype.setEngineType = function(engineType) { this.engineType = engineType };

module.exports = Car;