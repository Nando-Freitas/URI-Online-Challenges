var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var x = lines[0].split(" ");
var y = lines[1].split(" ");

var x1 = parseFloat(x[0]);
var y1 = parseFloat(x[1]);

var x2 = parseFloat(y[0]);
var y2 = parseFloat(y[1]);

var twoPointsDistance = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2),2);

console.log(twoPointsDistance.toFixed(4));
