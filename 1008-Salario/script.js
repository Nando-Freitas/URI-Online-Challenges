var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var worker = parseInt(lines[0]);
var hours = parseInt(lines[1]);
var salaryHour = parseFloat(lines[2]);

var salary = hours * salaryHour;

console.log("NUMBER = " + worker);
console.log("SALARY = U$ " + salary.toFixed(2));
