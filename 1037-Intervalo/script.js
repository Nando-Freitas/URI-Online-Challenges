var input = require('fs').readFileSync('./dev/stdin','utf8');
var lines = input.split('\n');

var value = lines[0];

function intervalo(value){
    if(value >= 0.0 && value <= 25.0 ){
        console.log("Intervalo [0,25]");
    }else if(value > 25.0 && value <= 50.0){
        console.log("Intervalo (25,50]");
    }else if(value > 50.0 && value <= 75.0){
        console.log("Intervalo (50,75]");
    }else if(value > 75.0 && value <= 100.0){
        console.log("Intervalo (75,100]");
    }else{
        console.log("Fora de intervalo");
    }
}

intervalo(value);
