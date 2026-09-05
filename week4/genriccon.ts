class GenericConstraintDemo {
    display<T>(value: T): void {
        console.log("Value:", value);
    }

    add(a: number, b: number): number {
        return a + b;
    }

    showLength<T extends { length: number }>(data: T): void {
        console.log("Length:", data.length);
    }

    getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
}

let obj = new GenericConstraintDemo();

obj.display(100);
obj.display("TypeScript");

let sum = obj.add(20, 30);
console.log("Sum:", sum);

obj.showLength("Hello");

let arr = [10, 20, 30, 40];
obj.showLength(arr);

let student = {
    name: "Alice",
    age: 20
};

console.log("Name:", obj.getProperty(student, "name"));
console.log("Age:", obj.getProperty(student, "age"));