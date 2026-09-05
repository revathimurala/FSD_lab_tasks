"use strict";
class Student {
    rollNo;
    name;
    branch;
    constructor(rollNo, name, branch) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
    }
}
const s1 = new Student(11, "Rahul", "CSE");
const s2 = new Student(12, "Priya", "AIDS");
s1.display();
console.log("--------------");
s2.display();
