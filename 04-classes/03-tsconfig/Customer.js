"use strict";
class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
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
