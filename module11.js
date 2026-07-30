console.log("hi everyone");
let name = "Turna";

console.log("Hello, " + name);
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}


function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(10);
checkEvenOdd(7);

let a = 10;
let b = 20;

console.log(a + b);

let num = 8;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
