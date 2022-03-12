// NEW OBJECT SYNTAX

// 1- Shorthand Properties
console.log("11111111111111111111111111111111111111111");

let isim = "arin",age = 5;

const myObj = {
    isim,
    age
}

console.log(myObj.isim);
console.log(myObj.age);
console.log("22222222222222222222222222222222222222222");
// 2 - Computed Property Names
// Bu özellik genelde pek kullanılmaz.
let prop1 = 'name';

let myObj1 = {};
myObj1[prop1] = 'arin';

myObj1 = {
    [prop1] : 'hasan',
}
console.log(myObj1);
console.log("33333333333333333333333333333333333333333");
// 3 - Short Method Syntax

const person = {
    name : "John",
    surname : 'Doe',
    fullName : function () {
        return this.name + this.surname
    }
}
// Yukarıdaki şekil eski usul şimdi yeni usul yapalım.

const person1 = {
    name : "John",
    surname : 'Doe',
    fullName() {        // Gördüğümüz gibi func anahtar kelimeisnden ve iki noktadan kurtuluyoruz.
        return this.name + this.surname
    }
}
console.log("4444444444444444444444444444444444444444444");
// 4 - Object Destructuring (Obje Parçalama) = En önemli konumuz

const result = {
    names : "John",
    surname : 'Doe',
    fullName() {        // Gördüğümüz gibi func anahtar kelimeisnden ve iki noktadan kurtuluyoruz.
        return this.names + this.surname
    }
}
// iki tane değer olursa aşağıdaki gibi değişkenlere teker teker tanımlayabiliriz ancak 30 tane olursa ne yapıcaz.
// let myVar1 = result.name;
// console.log(myVar1);
// let myVar2 = result.age;
// console.log(myVar1);

// let {names:name,surname:surname} = result;
// console.log(names);
// console.log(surname);

// let {names,surname} = result;
// console.log(names);
// console.log(surname);

// Bu bir liste halinde objelerden oluşan bir veri seti olsaydı hallederdik ama bu bir array değil ve sadece bir obje.
// for (const {names,surname} of result) {
//     console.log(names +" : "+surname);
// }

console.log("555555555555555555555555555555555555555555555555555");
// 5 - Spread Operator in Object Literals(...)

const aresult = {
    name :"John",
    surname:'Doe',
    age : 40,
    fullName(){
        return this.name +" : "+this.surname;
    }
}

let aresult2 = {...aresult};
console.log(aresult2);

let myResult1 = {
    name:"arin",
    age:6
}
let myResult2 ={
    job :'student',
    gender:'female'
}

const myArin = {...myResult1,school:'Zehra Baysal',...myResult2};
console.log(myArin);

console.log("666666666666666666666666666666666666666");

// 6 - REST Operator in Object Literals

const myPerson = {
    names : "Holo",
    surname : 'Doe',
    ages:40,
    fullName() {
        return this.name + this.surname
    }
}

// Eski Yöntem = const {names,surname,ages} = myPerson;
// Rest ile yapalım birde
const {...rest} = myPerson;
console.log(rest);

// 7 - Object Values - Object Entries

const yourPerson = {
    names : "Holo",
    surname : 'Doe',
    ages:40,
    fullName() {
        return this.name + this.surname
    }
}

console.log(Object.keys(yourPerson));
console.log(Object.values(yourPerson));
console.log(Object.entries(yourPerson));











