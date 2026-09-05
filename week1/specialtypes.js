"use strict";
// Any type
let data = 86;
data = "I am a student of svecw";
data = true;
console.log(data);
let myName = "Pravallika";
myName = true;
console.log(myName);
// Unknown type
let value = "Hello everyone";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
let digit = 45;
console.log(digit);
// Void type function
function display(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value * value);
    }
    else {
        console.log("Invalid data type");
    }
}
display(myName);
display(digit);
display("Hello, TypeScript!");
