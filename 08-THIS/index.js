// This'in js de iki fonksiyonu vardır.
// 1. obj.func() --> this obj
// this --> global object --> window(node.js(global))

console.log(this);
console.log(this);

// This yapısı tarayıcıda window nesnesine işaret eder.
// Node.js de ise global nesnesne işaret eder.

console.log(this === global);

// Function Declaration

function func1() {
    console.log(this);
}

// Function Expression

const func2 = function(){
    console.log(this);
}
const func3 = func1();
func3;
func2(); // Global nesnesine referans sağladı

// Function expression = Hoisting yapamıyoruz.
// Function declaration = Hoisting yapabiliyor.

// Şimdi objeye bağlı duruma bakalım

function Person(name,surname,age){
    const obj = {};
    console.log(obj);
    obj.name = name;
    console.log(obj);
    obj.surname = surname;
    console.log(obj);
    obj.age = age;
    console.log(obj);
    obj.fullName = function (){
        return obj.name + " "+obj.surname;
    }
    return obj;
}

const arin = new Person("Arin","Çekiç",5);
console.log(arin);


function Person2(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function (){
        return obj.name + " "+obj.surname;
    }
    return obj;
}

const esin = new Person("Esin","Çekiç",40);
const gurcan = new Person("Gurcan","Çekiç",40);
console.log(esin);
console.log(gurcan);

// Olayları özetliyorum
// functionlarda global nesneye erişir 
// Contruct lı functionlarda yani baş harfi büyük yerlerde örnek Person
// onlarda this.name dersek objeye ait hale gelir.


// Object Litreals'da durum nasıl oluyo ona da bakalım

const hasan = {
    name :"Hasan",
    surname :"Gürsoy",
    fullName : function () {
        return this.name+ " "+this.surname; // bu da aynı şekilde objeye refereans veriyor.
    },

    mother :{
        name : "Gamze",
        age : 40,
        surname : "Çekiç",
        fullName :function () {
            console.log(this);
            return this.name+" "+this.surname;
        }
    }
}

console.log(hasan);
console.log(hasan.fullName());

console.log(hasan.mother);
console.log(hasan.mother.fullName());


const ellis = {
    name : "Elis",
    funcy : function () {
        console.log(this === ellis);
    }
}

ellis.funcy(); // True dönücek neden çünkü objelerde this objenin kendisine referans döner.


const hassan = {
    name:"Hasan",
    funcy :function () {
        console.log(this === hassan);
        setTimeout(function () {
            console.log(this === hassan); // burdaki değer hassan'a ait değil çünkü arada setTimeOut var 
            console.log(this === global);
        },2000)
    }
}

hassan.funcy();