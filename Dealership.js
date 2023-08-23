const Dealership = function(name, capacity){
    this.name = name;
    this.capacity = capacity;
    this.carStock = [];
};

// GETTERS AND SETTERS

Dealership.prototype.getName = function() { return this.name };
Dealership.prototype.getCapacity = function() { return this.capacity };
Dealership.prototype.getStockCount = function() { return this.carStock.length };

Dealership.prototype.setName = function(name) { this.name = name };
Dealership.prototype.setCapacity = function(capacity) { this.capacity = capacity };

module.exports = Dealership;