"use strict";
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log("Addition:", MathOperations.add(20, 10));
console.log("Subtraction:", MathOperations.subtract(20, 10));
console.log("Multiplication:", MathOperations.multiply(20, 10));
console.log("Division:", MathOperations.divide(20, 10));
