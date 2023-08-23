const Customer = function (name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
};

Customer.prototype.buyCar = function(car) { 

    if (wallet >= car.getPrice) {
        Customer.setCar(car);
        wallet -= car.getPrice;
        return `You have just purchased the ${this.car.getManufacturer} ${this.car.getModel} and have ${this.wallet} remaining in you wallet`;
    } else {
        return "You don't have enough money in your wallet to purchase the car";
    }

};


// GETTERS AND SETTERS

Customer.prototype.getName = function () { return this.name; };
Customer.prototype.getWallet = function () { return this.wallet; };
Customer.prototype.getCar = function () { return this.car; };

Customer.prototype.setName = function (name) { this.name = name; };
Customer.prototype.setWallet = function (wallet) { this.wallet = wallet; };
Customer.prototype.setCar = function(car) { this.car = car };

module.exports = Customer;