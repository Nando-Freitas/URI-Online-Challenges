var input = require('fs').readFileSync('./dev/stdin','utf8');
var lines = input.split('\n');

var entradas = lines[0].split(' ');

var nota1 = parseFloat(entradas[0]);
var nota2 = parseFloat(entradas[1]);
var nota3 = parseFloat(entradas[2]);
var nota4 = parseFloat(entradas[3]);

var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1))/10;

console.log("Media: " + String(media.toFixed(1)));
if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if(media >= 5.0){
    console.log("Aluno em exame.");
    var exame = parseFloat(entradas[4]);
    console.log("Nota do exame: " + String(exame.toFixed(1)));
    var mediaRecalculada = (media + exame)/2;
    if(mediaRecalculada >= 5.0){
        console.log("Aluno aprovado.");
        console.log("Media final: " + String(mediaRecalculada.toFixed(1)));
    }else{
        console.log("Aluno reprovado.");
        console.log("Media final: " + String(mediaRecalculada.toFixed(1)));
    }
}else{
    console.log("Aluno reprovado.");
}
