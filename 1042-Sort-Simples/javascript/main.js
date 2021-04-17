var input = require('fs').readFileSync('./stdin/input.txt', 'utf-8');
var lines = input.split("\n");

var entries = lines[0].split(" ");

var a = parseInt(entries[0]);
var b = parseInt(entries[1]);
var c = parseInt(entries[2]);

if((a > b && a > c) && (b > c)){
  console.log(c + "\n" + b + "\n" + a + "\n\n" + a + "\n" + b + "\n" + c);
}else if((a > b && a > c) && (c > b)){
  console.log(b + "\n" + c + "\n" + a + "\n\n" + a + "\n" + b + "\n" + c);
}else if((b > a && b > c) && (c > a)){
  console.log(a + "\n" + c + "\n" + b + "\n\n" + a + "\n" + b + "\n" + c);
}else if((b > a && b > c) && (a > c)){
  console.log(c + "\n" + a + "\n" + b + "\n\n" + a + "\n" + b + "\n" + c);
}else if((c > a && c > b) && (a > b)){
  console.log(b + "\n" + a + "\n" + c + "\n\n" + a + "\n" + b + "\n" + c);
}else{
  console.log(a + "\n" + b + "\n" + c + "\n\n" + a + "\n" + b + "\n" + c);
}
