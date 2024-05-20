class Customer{
   
    constructor( private _firstName:string, private _lastName:string){
    }

   public get firstName(): string{
       return this._firstName;
    }
    public  set firstName(value: string){
        this._firstName = value;
    }

    public get lastName() :string{
        return this._lastName;
    }

    public set setlastName(value: string){
        this._lastName = value;
    }
}

let myCustomer = new Customer("OLATUNBOSUN", "ADENEM")

myCustomer.setlastName = "mytesting";

console.log(myCustomer.firstName +  "  " + myCustomer.lastName);