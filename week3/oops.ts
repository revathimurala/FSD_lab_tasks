class Student {
    // Properties
    name: string;
    age: number;
    course: string;

    // Constructor with default values
    constructor(name: string ="Pravallika", age: number = 19, course: string = "AIDS") {
        this.name =name;
        this.age =age;
        this.course =course;
    }

    // Method
    display(): void {
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Course:",this.course);
    }
}
// Object
let s1 = new Student();
console.log("Student 1 Details");
s1.display();

console.log();

// Objectt
let s2 = new Student("Siddhu", 20, "CSE");
console.log("Student 2 Details");
s2.display();