const st1 = {
    name : "adam",
    age : 24,
    marks : 89,
    getMarks: function(){
        return this.marks
    }
}
const st2 = {
    name : "eve",
    age : 27,
    marks : 92,
    getMarks: function(){
        return this.marks
    }
}
const st3 = {
    name : "clasey",
    age : 23,
    marks : 68, 
    getMarks: function(){
        return this.marks
    }
}
const st4 = {
    name : "jhon",
    age : 22,
    marks : 89,
    getMarks: function(){
        return this.marks
    }
}

let arr = [1,2,3,4]
arr.sayHello = ()=>{
    console.log("Hello!, I am arr")
}

let arr2 = [1,2,3,4]
arr2.sayHello = ()=>{
    console.log("Hello!, I am arr")
}

arr.__proto__.push = (n) => { console.log("pushing number : ", n)}

// ------1----- Factory Function
// function personMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(this.name)
//         }
//     }
//     return person;
// }

// let p1 = personMaker("muhammad umar", 24) // copy
// let p2 = personMaker("afaq ali", 23) //copy
// p2.talk()

// p1.talk() === p2.talk();





//------2------ Constructors : 
// doesn't return anything & start with capital letter : 

function Person(name, age){
        this.name = name;
        this.age = age;
    }

Person.prototype.talk = function (){
    console.log(`Hi, My name is ${this.name}`)
}
// New Operator
let p1 = new Person("adam", 27)
let p2 = new Person("eve", 24)



// ------3---------Classes :
// teplate for creating Object
// start with capital letter  
// The Constructor method is a special method of a class for creating and initializing an object intance of that class.

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`)
//     }

// }
// let p1 = new Person("adam", 27)
// let p2 = new Person("eve", 24)




// ------Inheritence-------
// Ex 1 :

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My Name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age)
        this.marks = marks;
    }

}



class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age)
        this.subject = subject;
    }
}
let stu1 = new Student("Afaq", 24, 95);

let t1 = new Teacher("Shabina", 32, "Math")



// Ex 2 :


class Mammal { // base class/ parent
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am Eating");
    }
}


class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log('woof...')
    }
}
class Cat extends Mammal{

    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..")
    }

}