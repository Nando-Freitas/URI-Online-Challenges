var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var time = parseInt(lines[0]);
var velocity = parseInt(lines[1]);

var distance = time * velocity;

var waste = distance/12;

console.log(waste.toFixed(3));
