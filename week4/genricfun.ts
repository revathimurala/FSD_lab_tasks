class GenericDemo {

    display<T>(value: T): void {
        console.log("Value:", value);
    }
    show<T, U>(a: T, b: U): void {
        console.log("First Value:", a);
        console.log("Second Value:", b);
    }
    getData<T>(data: T): T {
        return data;
    }
    printArray<T>(items: T[]): void {
        console.log("Array Elements:");
        for (let item of items) {
            console.log(item);
        }
    }
}

let obj = new GenericDemo();
obj.display(100);
obj.display("Hello TypeScript");
obj.display(true);
obj.show(10, 20);
obj.show("Hello", "World");
let numberResult = obj.getData(500);
let stringResult = obj.getData("Generics Example");
console.log("Returned Number:", numberResult);
console.log("Returned String:", stringResult);
let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];
obj.printArray(numbers);
obj.printArray(names);