var input = require("fs").readFileSync("./dev/stdin","utf8");
var lines = input.split("\n");

var days = parseInt(lines[0]);

var years = 0;
var months = 0;

while(days > 29){
    if(days >= 365){
        years = parseInt(days / 365);
        days = days % 365;
        continue;
    }else{
        months = parseInt(days / 30);
        days = days % 30;
        continue;
    }
}
console.log(years + " ano(s)" + "\n" + months + " mes(es)" + "\n" + days + " dia(s)");
