const input = require('fs').readFileSync('./dev/input.txt','utf-8');
const lines = input.split('\n');

const lados = lines[0].split(" ");

var ladoA = parseFloat(lados[0]);
var ladoB = parseFloat(lados[1]);
var ladoC = parseFloat(lados[2]);

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    perimetro = ladoA + ladoB + ladoC;
    console.log("Perimetro =", perimetro.toFixed(1));
}else{
    area = ((ladoA + ladoB)*ladoC)/2;
    console.log("Area =",area.toFixed(1));
}
