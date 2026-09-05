"use strict";
class Student {
    // Properties
    name;
    age;
    course;
    // Constructor with default values
    constructor(name = "Pravallika", age = 19, course = "AIDS") {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    // Method
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}
// Object
let s1 = new Student();
console.log("Student 1 Details");
s1.display();
console.log();
// Objectt
let s2 = new Student("Rahul", 20, "CSE");
console.log("Student 2 Details");
s2.display();
