class Customer{
     _firstName:string;
     _lastName:string;

    constructor(firstName:string, lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

}

let myCustomer = new Customer("ADE", "OLU");

console.log(myCustomer._firstName + " " + myCustomer._lastName);