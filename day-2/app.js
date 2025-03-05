// esa koi bhi code jis jo chalne ke bad true false de woh condition ban sakta he
// baghair "if" ke "else" syntax error de ga






// q1

// let ans = Number(prompt("what is yoour age?"));
// if (isNaN(ans)) {
//   console.log("Invalid Number");
// }
// if (ans >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you cant vote");
// }







// q2

// let amount = Number(prompt("what is the final amount"));
// let dis = 0;
// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   console.log("wrong input");
// }

// console.log(amount - Math.floor((5 * amount) / 100));








// q3

// upto 100  = 4 perunit
// upto 101 - 200  = 6 perunit
// upto 201 - 400  = 8 perunit
// morethan 400  = 13 perunit

let units = +prompt("Enter your Units that you used!")
let result = 0
if (isNaN(units)) {
  console.log("Invalid Number");
}

if (units<=100){
    result = units * 4
    units = units - 100
}
if (units<=100) {
    console.log("more than 100" , units);
    result = units * 6 
    units = units - 200
}
if (units<=100) {
    console.log("more than 100" , units);
    result = units * 6 
}

