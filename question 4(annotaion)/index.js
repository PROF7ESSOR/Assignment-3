"use strict";
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let myString = "Hello"; // Declaring a string variable
console.log("Before changing type: " + myString);
myString = 123; // Attempting to change the type of the variable
console.log("After changing type: " + myString); // Error: Type 'number' is not assignable to type 'string'.
