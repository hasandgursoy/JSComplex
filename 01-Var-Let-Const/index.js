// VAR - LET - CONST

// Let değişebilen değerler için kullanılır.

let age = 40;
console.log(age);

age = 42;
console.log(age);

// Const değişmeyen değerlerdir.

const names ="Arin";
console.log(names);

// Const kütüphane ve çatılarda let ve var 'ın toplamından daha fazla kullanılır.

// Bu örnegi mesela const la yazamassın çünkü i değeri sürekli değişiyor.
let str = "";

for(let i =0;i< 10;i++){
    str = str.concat(i);
    console.log(str);
}

 // Const ile array ilişkisi 

 const myArr = [1,2,3];
 console.log(myArr);
 myArr.pop();
 console.log(myArr); // Const bir arrayden değer silindi :D Hani Değişmezdi.
 // olayı anlatıyorum bak şimdi hafıza myArr arrayinin yeri tutuluyor içeriğindeki şeylerin değil aynı şekilde objelerde de öyle.
 // Bu arada arraylerde bir objedir.

 // Const ile obje ilişkisi
 const student ={
     name : "arin",
     age : 5
 }

console.log(student);
student.name = "Elis"; // bak değer değişti çünkü hafıza student'ın yeri var içeriğinin değil.
console.log(student);

// Peki direk objelerin yerini değiştirmeye çalışırsak ?
// Cevap basit o zaman const yapısı kızar ve yapamazsın.
// Example
// student = {
//     name : "Ali",
//     age :12
// }

// Object.freeze(student) = Bu olay nesnenin değişmesini engelliyo onu freeze ediyor. 

Object.freeze(student);
student.age = 24;
console.log(student.age);

// Peki hasan dayi bu var nedir yani bir anlat madem kullanmicaz neden hala ortamlarda görüyoruz.

// VAR --> Global scope / functional scope

// LET --> block scope

var x = 10;
console.log(window.x); // dersek bu nesneye ulaşabiliyoruz bu sorunlu bir durum aynısını let ve const da yapamıyoruz.


// HOISTING = Yukarı çekme yükseltme 
// Bir değeri console'a yazdıralım ancak değeri console.log un altına atayalım  js bunu bulup yine yazıyor.
// Buna hoisting deniyor.
// Bu durum let ve const için gerekli değil yaparsan hata alırsın.