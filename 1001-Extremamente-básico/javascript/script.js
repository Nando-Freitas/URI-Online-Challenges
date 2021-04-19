var input = require("fs").readFileSync("./dev/stdin","utf-8");
var lines = input.split("\n");

var A = lines[0];
var B = lines[1];
var X = parseInt(A) + parseInt(B);

console.log("X = " + X);
