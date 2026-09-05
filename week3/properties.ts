class Student{
    static course:string="CSE";
    readonly rollNo:number;
    name:string;

    constructor(rollNo:number,name:string){
        this.rollNo=rollNo;
        this.name=name;
    }
    show(){
        console.log("Roll No:",this.rollNo);
        console.log("Name:",this.name);
        console.log("Course:",Student.course);
    }
}
const s1=new Student(1,"Rahul");
const s2=new Student(2,"Sneha");

s1.show();
console.log("------------");
s2.show();

console.log("Course:",Student.course);
s2.name="Priya";
console.log("Updated Name:",s2.name);
Student.course="AI & DS";
console.log("Updated Course:",Student.course);