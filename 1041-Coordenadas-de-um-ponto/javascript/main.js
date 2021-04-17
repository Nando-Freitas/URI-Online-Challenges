var input = require('fs').readFileSync('./stdin/input.txt','utf-8');
var lines = input.split('\n');

var entries = lines[0].split(" ");

var coordenateX = parseFloat(entries[0]);
var coordenateY = parseFloat(entries[1]);

if(coordenateX > 0.0 && coordenateY > 0.0){
  console.log("Q1");
}else if(coordenateX < 0.0 && coordenateY > 0.0){
  console.log("Q2");
}else if(coordenateX < 0.0 && coordenateY < 0.0){
  console.log("Q3");
}else if(coordenateX > 0.0 && coordenateY < 0.0){
  console.log("Q4");
}else if((coordenateX === 0 && coordenateY > 0.0) || (coordenateX === 0 && coordenateY < 0.0)){
  console.log("Eixo Y");
}else if((coordenateX > 0.0 && coordenateY === 0) || (coordenateX < 0.0 && coordenateY === 0)){
  console.log("Eixo X");
}else{
  console.log("Origem");
}
