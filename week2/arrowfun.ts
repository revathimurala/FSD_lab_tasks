// traditional function
function adding(a: number): number {
    return a+100;
}
//short hand arrow function
const square=(x: number): number => x*x;
console.log("Addition =",adding(10));
console.log("Square of 5 =",square(5));

const greet=(name: string): string => {
    return "Hello " + name;
};

console.log(greet("Pravallika"));
const greetings=(name: string="Student"): string => {
    return "Hello " + name;
};

console.log(greetings());