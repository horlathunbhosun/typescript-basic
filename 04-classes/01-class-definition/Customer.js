var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("ADE", "OLU");
console.log(myCustomer._firstName + " " + myCustomer._lastName);
