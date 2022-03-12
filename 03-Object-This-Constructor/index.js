// Object - This - Constructor Func - new Object(), create

// OBJECT

// Object Literal

const person = {
    name : "John",
    surname : "Doe",
    age :40,
    languages : ["Trukish","English","Spanish"],
    fullName: function () {
        return this.name +" " +  this.surname;
    },
    address :{
        city : "Balıkesir",
        district : "Akçay"
    }
}

person.job = "Student"

// dot notation

console.log(person);
console.log(person.fullName());
console.log(person.address.city);
console.log(person.job);

// bracket notation

console.log(person["name"]);
console.log(person["fullName"]());
console.log(person["na"+"me"]);


// CONSTRUCTOR ---> YAPICI

// Uzun ve ayrıntılı tanımlama
function Person (name,surname,age){

    const obj ={}
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function(){
        return obj.name + " " + obj.surname;
    }

    return obj;
}

const person1 = new Person("hasan","gürsoy",15);
const person2 = new Person("john","fenaous",38);
console.log(person1);
console.log(person2);

// Kısa Şekilde ve daha mantıksal şekilde Constructor tanımlama

function Human(name,surname,age){

    console.log(this);

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name +" "+this.surname;
    }
    console.log(this);
}

const human1 = new Human("John","Doe",40);
console.log(human1);
console.log(human1.fullName());

// Normal fonksiyonlardan ve objelerden farklı olarak
// new Person() şeklinde oluşturuyoruz dikkat ettiysek.
// JavaScript hemen yeni bir nesne oluşturur.


// OBJECT CONSTRUCTOR
// object.create();

const adam = new Object();
adam.name ="john";
adam.surname = "Doe";
adam.age = 40;
adam.fullName = function fullName(){
    return this.name + " "+ this.surname;
}

console.log(adam);

const arin = Object.create(adam);

arin.name = "Arin";
arin.surname="Software";
arin.age = 5;

console.log(arin);
// Arine full name metodunu atamadık ancak aralarındaki kalıtım dan dolayı hallediyoruz. rahat ke
console.log(arin.fullName);






