"use strict";
//Instructions: Swap the values of two variables without using a third variable.
let a = 5;
let b = 10;
console.log("Before swapping:");
console.log("a = " + a);
console.log("b = " + b);
//After swapping
a = a + b;
b = a - b;
a = a - b;
console.log("a = " + a);
console.log("b = " + b);
