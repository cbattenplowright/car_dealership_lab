const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
};

// GETTERS AND SETTERS

Customer.prototype.getName = function() { return this.name; };
Customer.prototype.getWallet = function() { return this.wallet; };
Customer.prototype.getCar = function() { return this.car; };

Customer.prototype.setName = function(name) { this.name = name; };
Customer.prototype.setWallet = function(wallet) { this.wallet = wallet; };

module.exports = Customer;