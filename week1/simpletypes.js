"use strict";
let MyName = "Pravallika";
let age = 19;
let cgpa = 93;
let section = "AIDS-B";
let success = true;
console.log("Name: ", MyName);
console.log("Age: ", age);
console.log("CGPA: ", cgpa);
console.log("Section: ", section);
console.log("Pass: ", success);
function details(name, score, result) {
    console.log("Student Name:", name);
    console.log("Marks:", score);
    if (result) {
        console.log("Result: Pass");
    }
    else {
        console.log("Result: Fail");
    }
}
details(MyName, cgpa, success);
