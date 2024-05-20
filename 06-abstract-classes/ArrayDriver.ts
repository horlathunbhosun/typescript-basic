import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(10,4,5);

let myRecantange = new Rectangle(10,6,7,7);

//declaring the array of shapes 
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRecantange);

for(let theShe of theShapes){
    console.log(theShe.getInfo());
    console.log("AREA:" + theShe.calculateArea());
    console.log("--------")
}