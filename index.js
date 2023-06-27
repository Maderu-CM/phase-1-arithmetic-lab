//program to multiply num1 and num2
let multiply;
let num1 = 31;
let num2 = 2;

function product(num1, num2) {
  return num1 * num2;
}

multiply = product(num1, num2);
console.log('multiply is', multiply);

//Generates a random integer greater than 0
var random = Math.floor(Math.random() * 100) + 1;

console.log(random); // Output the random number generated

//calculate the remainder of dividing variable num3 by num4
let num3 = 10;
let num4 = 6;

let mod = ((num3 % num4) + num4) % num4;

console.log(mod); // Output the value of mod

//maximum value being the output
let set = [10, 5, 20, 15, 7];
let max = Math.max(...set);

console.log(max); // Output the maximum value
