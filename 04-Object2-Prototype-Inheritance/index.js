// OBJECT - PROTOTYPE - INHERITANCE

const person = {
    name :"John",
    surname :"Doe",
    age :40,
    fullName : function(){
        return this.name +" "+this.surname
    }
}

console.log(person);
console.log(person.name);
console.log(person.fullName());
//console.log(person.job);

// Person nesnesi prototype'ı olan object nesnesinden inherit alıyo .
// Bu şekilde aşağıdaki fonksiyonları kullanabiliyoruz. 
console.log(person.toString());
console.log(person.hasOwnProperty('name'));


// OBJECT + name, surname, age, fullName() -----> person 

const myObj = {};
console.log(myObj.toString());

// OBJECT ---> myObj

function Person(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " "+ this.surname;
    }
}

// Unutmadan yazayım Person yazarken büyük harfle bilerek başlıyoruz onun bir constructor olduğunu göstermek için.
const arin = new Person("arin","çekiç",6);
console.log(arin);

// OBJECT + name, surname, age, fullName(), -----> Person <------- arin
console.log("========================================");
console.log(arin.__proto__);

const elis = new Person("Elis","Çekiç",4);
console.log(elis);
elis.job = "Child";
console.log(elis);

// OBJECT + name, surname, age, fullName(), -----> Person + job <------- arin

// Elis nesnesinin proto su olan toString'i Overwrite ettik :D 
elis.toString = function(){
    return "ELISSSSSSS";
}

console.log(elis.toString());

// PROTOTYPE'A MUDAHALE ETMEYI GORELİM


function Human(name,age){
    this.name = name;
    this.age = age;

}

Human.prototype.fullName = function () {
    return "isim :"+this.name+" yaş : "+ this.age; 
}


const hasan = new Human("hasan",25);
console.log(hasan);
console.log(hasan.fullName());

// Prototype ı inheritance için kullanıyoruz.

const john = Object.create(hasan);
console.log("name" in john);


