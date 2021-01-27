var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var distance = parseInt(lines[0]);

var time = distance * 2;

console.log(time + " minutos");
