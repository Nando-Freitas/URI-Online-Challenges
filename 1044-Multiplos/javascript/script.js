const input = require('fs').readFileSync('./dev/input.txt','utf-8');
const lines = input.split("\n");

const entradas = lines[0].split(" ");
var a = parseInt(entradas[0]);
var b = parseInt(entradas[1]);

console.log(multiplicidade(a, b));

function multiplicidade(a, b){
  for(i = 0; i < 100000; i++){
    if((a*i == b) || (b*i == a)){
      return "Sao Multiplos";
    }
  }
  return "Nao sao Multiplos";
}
