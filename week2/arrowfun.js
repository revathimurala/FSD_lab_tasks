"use strict";
// traditional function
function adding(a) {
    return a + 100;
}
//short hand arrow function
const square = (x) => x * x;
console.log("Addition =", adding(10));
console.log("Square of 5 =", square(5));
const greet = (name) => {
    return "Hello " + name;
};
console.log(greet("Pravallika"));
const greetings = (name = "Student") => {
    return "Hello " + name;
};
console.log(greetings());
