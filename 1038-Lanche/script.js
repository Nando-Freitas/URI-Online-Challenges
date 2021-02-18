var input = require('fs').readFileSync('./dev/stdin','utf8');
var lines = input.split('\n');

var entradas = lines[0].split(' ')

var codigo = entradas[0];
var qtd = entradas[1];
var total = 0;

switch (codigo) {
  case '1':
    total = 4.00 * qtd;
    console.log("Total: R$ " + total.toFixed(2));
    break;
  case '2':
    total = 4.50 * qtd;
    console.log("Total: R$ " + total.toFixed(2));
    break;
  case '3':
    total = 5.00 * qtd;
    console.log("Total: R$ " + total.toFixed(2));
    break;
  case '4':
    total = 2.00 * qtd;
    console.log("Total: R$ " + total.toFixed(2));
    break;
  case '5':
    total = 1.50 * qtd;
    console.log("Total: R$ " + total.toFixed(2));
    break;
  default:
    console.log("Código inválido");
}
