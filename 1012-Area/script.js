var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var values = lines[0].split(" ");
console.log(values);

const pi = 3.14159;

var firstValue = parseFloat(values[0]);
var secondValue = parseFloat(values[1]);
var thirdValue = parseFloat(values[2]);

//Triangle
var triangle = (firstValue*thirdValue)/2;

//Circle
var circle = pi*Math.pow(thirdValue,2);

//Trapeze
var trapeze = ((firstValue+secondValue)*thirdValue)/2;

//Square
var square = Math.pow(secondValue,2);

//Rectangle
var rectangle = firstValue*secondValue;

console.log("TRIANGULO: " + triangle.toFixed(3));
console.log("CIRCULO: " + circle.toFixed(3));
console.log("TRAPEZIO: " + trapeze.toFixed(3));
console.log("QUADRADO: " + square.toFixed(3));
console.log("RETANGULO: " + rectangle.toFixed(3));
