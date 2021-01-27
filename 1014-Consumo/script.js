var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var distancia = parseInt(lines[0]);
var litros = parseFloat(lines[1]);

var total = distancia/litros;

console.log(total.toFixed(3) + " km/l");
