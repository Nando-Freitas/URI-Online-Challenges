var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var entradas = lines[0].split(" ");

var a = parseInt(entradas[0]);
var b = parseInt(entradas[1]);
var c = parseInt(entradas[2]);

var theGreatest = (a+b+Math.abs(a-b))/2;
var theBigGreatest = (c+theGreatest+Math.abs(c - theGreatest))/2;
console.log(theBigGreatest + " eh o maior");
