"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer("OLATUNBOSUN", "ADENEM");
myCustomer.setlastName = "mytesting";
console.log(myCustomer.firstName + "  " + myCustomer.lastName);
