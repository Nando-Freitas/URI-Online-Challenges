var input = require('fs').readFileSync('./dev/stdin','utf8');
var lines = input.split("\n");

var entradas = String(lines);

var a = entradas[0];
var b = entradas[2];
var c = entradas[4];
var d = entradas[6];

function selecao(a, b, c, d){
    let somaCD = c + d;
    let somaAB = a + b;
    if(b > c && d > a && somaCD > somaAB && c > 0 && d > 0 && (a % 2) == 0){
        return "Valores aceitos";
    }else{
        return "Valores nao aceitos";
    }

}

console.log(selecao(a, b, c, d));
