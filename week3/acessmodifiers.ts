class Student{
    public rollNo:number;
    public name:string;
    private marks:number;
    protected branch:string;

    constructor(rollNo:number,name:string,marks:number,branch:string){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;
        this.branch=branch;
    }

    display(){
        console.log("Roll No:",this.rollNo);
        console.log("Name:",this.name);
        console.log("Marks:",this.marks);
        console.log("Branch:",this.branch);
    }
}

const s1=new Student(11,"Rahul",90,"CSE");

console.log(s1.rollNo);
console.log(s1.name);

s1.display();