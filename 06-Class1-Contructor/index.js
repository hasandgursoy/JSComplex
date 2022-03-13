// JS CLASSES

// constructor function

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
};
Person.prototype.friends = ["Ela", "Rüzgar"];

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin);
console.log(elis);


// Şimdi class ile oluşturalım
// CLASS DECLARATION
class Human {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName(){
        return this.name + " "+this.surname;
    }

}

const nether = new Human("Hasan","Gürsoy",24);
console.log(nether);
console.log(nether.fullName());

// Şu durumu açıklayalım normal fonksiyona dışarıdan prototype tanımlayabiliyoduk.
// Class yapısı bunu bizim yerimize yapıyor sadece daha geleneksel hali ile.
// Her sınıf bir function'dır.

console.log(typeof Person);
console.log(typeof nether);


// CLASS EXPRESSION

const Human1 = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName(){
        return this.name + " "+this.surname;
    }
}