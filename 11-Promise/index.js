// Promise bir asenkron işlemininin nihai sonucunu temsil eden js nesnesidir.

// PROMISE
// Promise yapısı resolve ve reject üzerinden ilerler. Ya başarılı bir sonuç döner ya da reject yani error döner.

const promise1 = new Promise(function (resolve, reject) {

    // Birden fazla sonuc dönüyorsak ilk dönen state yakalanır.
    //reject('Error');
    resolve('DATA');

});

console.log(promise1);


// Promisin 3 tane state'i var 
// 1. pending (undefined)
// 2. fullfilled (Data) --> resolve()
// 3. rejected (Error)  --> reject()

promise1.then((value) => { // resolve(value) resolve olma durumunu yakalar..
    console.log(value);
});

promise1.catch(value => console.log(value)); // catch(value) reject olma durumunu yakalar. 

// =======================================================================================

const promise2 = new Promise((resolve, reject) => {
    resolve()
});

// Kuyruk gibi uç uca da yazabiliyoruz bu şekilde.
promise2.then(() => {
    console.log("Veriler Alındı.");
}).catch(() => {
    console.log("Veriler Alınamadı.");
}).finally(() => console.log('Çalış Köle'));


// Then üzerinden de reject olma durumunu yakalayabiliyoruz.
// Ancak bu kullanılmaz okumak zorlaşır kötüdür.

promise2.then(() => { 
    console.log("Veriler Alındı.") },
    () => {
        console.log("Veriler Alınamadı.")
    }
);

// Bir önceki dersde yaptığımız yapıyı callback ile yapmıştık şimdi PROMISE ile beraber yapalım.

const books = [
    {name:"Pinball 1973",author:"Haruki Murakami"},
    {name:"Özgürlük",author:"Zygmunt Bauman"},
    {name: "Türkiye'de Çağdaşlaşma",author:"Niyazi Berkes"}
];

const listBooks = () => {
    books.map((book,index) => {
        console.log(book,index);
    });
}

/* const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
} */

// Promise ile yapılmış hali

const addBook = (newBook) => {
    const promisse = new Promise((resolve,reject) => {
        books.push(newBook)
        resolve(books)
    });

    return promisse;
}

addBook({name: "Sokratesin Savunması",author:"Plüton"})
.then(() => {
    console.log("Yeni Liste");
    listBooks();
}).catch((reason) => {
    console.log(reason);
});


// ==============================================================

const addTwoNumbers = () => {
    const promms = new Promise ((resolve,reject) => {
        const sum = num1 + num2;
        (typeof num1 !== 'number' || typeof num2 !== 'number') ? reject('2 Sayı Girmeniz gerekir.') : resolve(sum);
    });

    return promms;
}

addTwoNumbers(4,8)
.then((value) => {
    console.log('Toplam :',value);
}).catch((value) => {
    console.log('Hata :',value);
});