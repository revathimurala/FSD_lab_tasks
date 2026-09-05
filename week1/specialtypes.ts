// Any type
let data: any=86;
data="I am a student of svecw";
data=true;
console.log(data);
let myName: any="Pravallika";
myName=true;
console.log(myName);

// Unknown type
let value: unknown="Hello everyone";
if(typeof value==="string"){
    console.log(value.toUpperCase());
}
let digit: number=45;
console.log(digit);

// Void type function
function display(value: unknown): void {
    if(typeof value==="string"){
        console.log(value.toUpperCase());
    }else if(typeof value==="number"){
        console.log(value*value);
    }else{
        console.log("Invalid data type");
    }
}
display(myName);
display(digit);
display("Hello, TypeScript!");
