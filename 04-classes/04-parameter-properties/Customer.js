"use strict";
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set setlastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("OLATUNBOSUN", "ADENEM");
myCustomer.setlastName = "mytesting";
console.log(myCustomer.firstName + "  " + myCustomer.lastName);
