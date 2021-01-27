var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var salaryFixed = parseFloat(lines[1]);
var sell = parseFloat(lines[2]);

var total = salaryFixed + (sell*0.15);

console.log("TOTAL = R$ " + total.toFixed(2));
