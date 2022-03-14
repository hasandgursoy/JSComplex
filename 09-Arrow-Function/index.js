// ARROW FUNCTİON

// Function Declaration

function square(num) {
    return (num*num);
}

console.log(square(4));
 
// Function Expression

const square2 = function (num) {
    return num * num;
}

console.log(square2(5));

// Arrow Function Expression

const square3 = num => (num*num);

console.log(square3(8));

globalThis.name = "hasan";
const tellName = () => {
    console.log(this.name);
}

tellName();


const person = {
    name :"elis",
    tellName:() =>{ // normalde objeye referans vermesi gereken this arrow functionda window'a referans veriyor.
        console.log(this);
        console.log(this.name);
    }
}


const person1 = {
    name : "arin",
    tellName: function () {
        console.log(this);
        console.log(this.name);

        setTimeout(function () {
            console.log(this);
            console.log(this.name);
        },2000)

    }
}

person1.tellName()

const person2 = {
    name : "arin",
    tellName:  () => {
        console.log(this);
        console.log(this.name);

        setTimeout( () => {
            console.log(this);
            console.log(this.name);
        },2000)

    }
}

person2.tellName();

// ÖNEMLİİİİİİİİİİİİ !!!!
// Olayı özetliyorum arrow func normalde kendi bulunduğu scope yerine global scope u referans alır window nesnesine erişir.
// İster obje içinde olsun ister olmasın.
// O yüzden objelerde normal func body kullanıyoruz ve arrow'u sadece callbacklerde kullanıyoruz.

const myObj = {
    year: 2020,
    showYear1 : function () {
        console.log(this.year,this);
    },
    showYear2 : () => console.log(this.year,this)
}


myObj.showYear1();
myObj.showYear2();


// Arrow Func => Call Apply Bind ile çalıştırılmamalıdır.

// CALL

const student ={ 
    examResult :function () {
        return this.name + " "+this.grade;
    }
}

const student1 = {
    name : "Arin",
    grade : 77
}

const student2 = {
    name : "elis",
    grade : 77
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));

// Aynı işlemi Arrow Func ile yapacağım ve sonuç windows nesnesinin name'i ve grade'i yazdıracak bu yüzden call ile kullanmıyoruz.

const student0 ={ 
    examResult :function () {
        return this.name + " "+this.grade;
    }
}

const student3 = {
    name : "Arin",
    grade : 77
}

const student4 = {
    name : "elis",
    grade : 77
}

console.log(student.examResult.call(student3));
console.log(student.examResult.call(student4));
