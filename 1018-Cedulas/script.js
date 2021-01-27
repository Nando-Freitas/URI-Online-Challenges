var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var money = parseInt(lines[0]);
console.log(money);

var oneHundred = 0;
var fifthy = 0;
var twenty = 0;
var ten = 0;
var five = 0;
var two = 0;
var one = 0;

while(money > 0){
  if(money >= 100){
      oneHundred = parseInt(money / 100);
      money = money % 100;
      continue;
  }else if(money >= 50 && money < 100){
      fifthy = parseInt(money / 50);
      money = money % 50;
      continue;
  }else if(money >= 20 && money < 50){
      twenty = parseInt(money / 20);
      money = money % 20;
      continue;
  }else if(money >= 10 && money < 20){
      ten = parseInt(money / 10);
      money = money % 10;
      continue;
  }else if(money >= 5 && money < 10){
      five = parseInt(money / 5);
      money = money % 5;
      continue;
  }else if(money >= 2 && money < 5){
      two = parseInt(money / 2);
      money = money % 2;
      continue;
  }else{
      one = parseInt(money / 1);
      money = money % 1;
      continue;
  }
}

console.log(oneHundred + " nota(s) de R$ 100,00");
console.log(fifthy + " nota(s) de R$ 50,00");
console.log(twenty + " nota(s) de R$ 20,00");
console.log(ten + " nota(s) de R$ 10,00");
console.log(five + " nota(s) de R$ 5,00");
console.log(two + " nota(s) de R$ 2,00");
console.log(one + " nota(s) de R$ 1,00");
