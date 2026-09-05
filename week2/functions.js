"use strict";
// 1. Parameters and Return Type
function add(a, b) {
    return a + b;
}
// 2. Rest Parameters
function total(...marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}
// 3. Default Parameters
function greeting(name = "Student") {
    console.log("Hello", name);
}
// 4. Optional Parameters
function display(name, age) {
    if (age !== undefined) {
        console.log("Name:", name, "Age:", age);
    }
    else {
        console.log("Name:", name);
    }
}
// Test
console.log("Sum =", add(10, 20));
console.log("Total Marks =", total(80, 90, 85));
greeting();
greeting("Pravallika");
display("Pravallika");
display("Siddhu", 20);
