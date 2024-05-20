"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(10, 4, 5);
let myRecantange = new Rectangle_1.Rectangle(10, 6, 7, 7);
//declaring the array of shapes 
let theShapes = [];
//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRecantange);
for (let theShe of theShapes) {
    console.log(theShe.getInfo);
}
