// Class2 - Inheritance - Instance - Subclass - Super - Extends

class Person {
    constructor(name, surname, age) {
        
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname;
    }

    static showName = "Person";

    static staMethod() {
        console.log("Satatic Method Çalışıyor.");
    }
}

console.log(typeof Person);

// Instance 
const arin = new Person("Arin", "Çekiç", 5);
console.log(arin instanceof Person);


console.log(Person.showName);
Person.staMethod();
// Static methodlar JS'de de var bu güzel
// Static methodlar yanlızca main Class yapısından çağrılır.


// Inheritance - EXTENDS 

class Enginer extends Person{}; // Engineer Subclass --> Person

const gurcan = new Enginer("Gürcan","Çekiç",40);

console.log(gurcan);
console.log(gurcan instanceof Person);


class Manager extends Person {
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job = job;
    }

    getMoney(){
        console.log("PARA KAZAN");
    }

}

const hasan = new Manager("Hasan","Gürsoy",24,"Software Development");
console.log(hasan);
hasan.getMoney();

// Var olan Array clasını extend etsin.

class ExtendedArray extends Array {
    shuffle(){
        this.sort(()=>Math.random() - 0.5);
    }

}
let mtArr = new ExtendedArray(1,2,3,4,5);
console.log(mtArr);
mtArr.shuffle();
console.log(mtArr);

console.log(mtArr instanceof ExtendedArray);
console.log(mtArr instanceof Array);