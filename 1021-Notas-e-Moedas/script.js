var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var money = String(lines[0]);
var moneySeparated = money.split(".");

var ballots = moneySeparated[0];
var coins = moneySeparated[1];

//ballots
var oneHundred = 0.00;
var fifthy = 0.00;
var twenty = 0.00;
var ten = 0.00;
var five = 0.00;
var two = 0.00;
var oneHundredCents = 0;

while(ballots >= 1){
    if (ballots >= 100){
        oneHundred = ballots / 100;
        ballots = ballots % 100;
    }else if(ballots >= 50 && ballots < 100){
        fifthy = ballots / 50;
        ballots = ballots % 50;
    }else if(ballots >= 20 && ballots < 50){
        twenty = ballots / 20;
        ballots = ballots % 20;
    }else if(ballots >= 10 && ballots < 20){
        ten = ballots / 10;
        ballots = ballots % 10;
    }else if(ballots >= 5 && ballots < 10){
        five = ballots / 5;
        ballots = ballots % 5;
    }else if(ballots >= 2 && ballots < 5){
        two = ballots / 2;
        ballots = ballots % 2;
    }else{
        oneHundredCents = ballots / 1;
        ballots = ballots % 1;
    }
}

//coins
var fifthyCents = 0;
var twentyFiveCents = 0;
var tenCents = 0;
var fiveCents = 0;
var oneCent = 0;

while(coins >= 1){
    if (coins >= 100){
        oneHundredCents = coins / 100;
        coins = coins % 100;
    }else if(coins >= 50 && coins < 100){
        fifthyCents = coins / 50;
        coins = coins % 50;
    }else if(coins >= 25 && coins < 50){
        twentyFiveCents = coins / 25;
        coins = coins % 25;
    }else if(coins >= 10 && coins < 25){
        tenCents = coins / 10;
        coins = coins % 10;
    }else if(coins >= 5 && coins < 10){
        fiveCents = coins / 5;
        coins = coins % 5;
    }else{
        oneCent = coins / 1;
        coins = coins % 1;
    }
}

console.log("NOTAS:");
console.log(parseInt(oneHundred) + " nota(s) de R$ 100.00");
console.log(parseInt(fifthy) + " nota(s) de R$ 50.00");
console.log(parseInt(twenty) + " nota(s) de R$ 20.00");
console.log(parseInt(ten) + " nota(s) de R$ 10.00");
console.log(parseInt(five) + " nota(s) de R$ 5.00");
console.log(parseInt(two) + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(parseInt(oneHundredCents) + " moeda(s) de R$ 1.00");
console.log(parseInt(fifthyCents) + " moeda(s) de R$ 0.50");
console.log(parseInt(twentyFiveCents) + " moeda(s) de R$ 0.25");
console.log(parseInt(tenCents) + " moeda(s) de R$ 0.10");
console.log(parseInt(fiveCents) + " moeda(s) de R$ 0.05");
console.log(parseInt(oneCent) + " moeda(s) de R$ 0.01");
