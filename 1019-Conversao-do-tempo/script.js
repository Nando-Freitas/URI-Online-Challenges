var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var seconds = parseInt(lines[0]);

var hour = 0;
var minutes = 0;

while(seconds > 60){
    if(seconds > 3600){
        hour = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        continue;
    }else{
        minutes = parseInt(seconds / 60);
        seconds = seconds % 60;
        continue;
    }
}

console.log(hour + ":" + minutes + ":" + seconds);
