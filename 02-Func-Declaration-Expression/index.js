// Fonksiyonlar, Declaration vs Expression, IIFE, First-Class Fonksiyonlar

// FONKSIYONLAR

// Function Declaration



function square(num) {

    if (isNaN(num)) {
        console.log(num * num);

        return (num * num);
    } else {
        console.log(num * num);

        return (num * num);
    }
}

// Invoke = çağırmak () = bunu invoke edilebilir bir yapı haline getiriyor.
square(15);

// Parametre fonksiyonu oluştururken kullanılır 
// Arguman ise fonksiyon çağırılıken.

// Function Declaration --> HOISTED

// Function Expression
// bir değişkene fonksiyon atamaya function expression denir.
// Func name is optional
const squares = function (num) {
    return (num * num);
}
console.log(squares);
console.log(squares(25));

// FIRST - CLASS FUNCTIONS
// Değişken gibi davrandığımız yapılar first classdır. mesela değişkene verilmiş funtions.
const myArr = ["hasan", 15, function () { console.log("Array Element"); }];

myArr[2]();

// Objeden de örnek verelim
const myObj = {
    age: 5,
    name: "Arin",
    func: function () {
        console.log("Object Element");
    }
}

myObj.func(); // Objeden fonksiyon çağırdık :D 


// int değer ile funtion tanımladık invoke etmek için de parantez acıp kapattık sonunda bu önemli !
console.log(20 + (function () { return 5; })()); // IIFE


// Function Expression is not Hoisted
// Funtions expression can be ananymous but funtion declaration can't be .

// FIRST - CLASS FUNCTIONS DEVAM

const addFive = function (num, func) {
    console.log(num + func());
}

addFive(10, function () { return 5; });

// Bir fonksiyon başka bir fonksiyonu return edebilir.

const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2);
    }
}

myFunc(10)();

// IIFE
// Immediately Invocable Function Expression

const sum = function () {
    console.log(5 + 12);
}(); // sonuna parantez açıp kapattık yani invoke ettik anında çalışacak yani 

sum; // bu artık bu şekilde çalışacaktır.

// ikinci    kullanım ise bu şekilde.

(function () {
    console.log(5 + 12);
})();

// JavaScriptte herşey birer nesnedir.
console.log(square.length,typeof(square));