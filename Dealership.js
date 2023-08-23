const Dealership = function(name, capacity, carStock){
    this.name = name;
    this.capacity = capacity;
    this.carStock = carStock;
}

// GETTERS AND SETTERS

Dealership.prototype.getName() = function() { return this.name };
Dealership.prototype.getCapacity() = function() { return this.capacity };
Dealership.prototype.getCarStock() = function() { return this.carStock };

Dealership.prototype.setName() = function(name) { this.name = name };
Dealership.prototype.setCapacity() = function(capacity) { this.capacity = capacity };
Dealership.prototype.setCarStock() = function(carStock) { this.carStock = carStock };

module.exports = Dealership;