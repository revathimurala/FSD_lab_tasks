"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Stored Value:", this.value);
    }
}
let numberBox = new Box(100);
numberBox.display();
let stringBox = new Box("TypeScript");
stringBox.display();
let booleanBox = new Box(true);
booleanBox.display();
