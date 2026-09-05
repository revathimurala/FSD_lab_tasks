// 1. Parameters and Return Type
function add(a: number, b: number):number {
    return a+b;
}

// 2. Rest Parameters
function total(...marks: number[]): number {
    let sum=0;
    for (let mark of marks) {
        sum+=mark;
    }
    return sum;
}

// 3. Default Parameters
function greeting(name: string = "Student"): void {
    console.log("Hello",name);
}

// 4. Optional Parameters
function display(name: string, age?: number): void {
    if (age!==undefined) {
        console.log("Name:",name,"Age:",age);
    } else {
        console.log("Name:",name);
    }
}

// Test
console.log("Sum =",add(10, 20));

console.log("Total Marks =",total(80, 90, 85));

greeting();
greeting("Pravallika");

display("Pravallika");
display("Siddhu", 20);