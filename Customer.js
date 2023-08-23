const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
};

Customer.prototype.getName = function() { return this.name; };
Customer.prototype.getWallet = function() { return this.wallet; };
Customer.prototype.getCar = function() { return this.car; };

Customer.prototype.setName = function(name) { return this.name; };
Customer.prototype.setWallet = function(wallet) { return this.wallet; };

module.exports = Customer;