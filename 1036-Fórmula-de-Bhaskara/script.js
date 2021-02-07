var input = require('fs').readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var entradas = String(lines);
var entradasSeparadas = entradas.split(" ");

var a = parseFloat(entradasSeparadas[0]);
var b = parseFloat(entradasSeparadas[1]);
var c = parseFloat(entradasSeparadas[2]);

function bhaskara(a, b, c){
    delta = Math.pow(b, 2) - 4*a*c;
    if (a === 0 || delta < 0){
          console.log("Impossivel calcular");
    }else{
          x1 = (b*(-1) + Math.sqrt(delta, 2))/(2*a);
          x2 = (b*(-1) - Math.sqrt(delta, 2))/(2*a);
          console.log("R1 = " + x1.toFixed(5));
          console.log("R2 = " + x2.toFixed(5));
    }
}

bhaskara(a, b, c);
