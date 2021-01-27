var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var firstTool = lines[0].split(" ");
var secondTool = lines[1].split(" ");

var firstToolNumber = parseInt(firstTool[1]);
var secondToolNumber = parseInt(secondTool[1]);

var firstToolPrice = parseFloat(firstTool[2]);
var secondToolPrice = parseFloat(secondTool[2]);

var total = (firstToolNumber*firstToolPrice)+(secondToolNumber*secondToolPrice);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
