// SENKRON-ASENKRON-CALL STACK-THREAD-CALLBACK

// JS Single Thread
// JS Synchronous

const func1 = () => {
    console.log("Func 1 Console Log 1");
    console.log("Func 1 Console Log 2");

    //alert("Alert Message");
}

const func2 = () => {
    console.log("Func 2 Console Log 1");
    console.log("Func 2 Console Log 2");
}

func1();
func2();

let x = 10;
console.log(x);
setTimeout(() =>{
    x = x +5 ;
},1000);

console.log(x);
x = x +5 ;
console.log(x);

// Senkron çalışmanın 2 büyük problemi var 
// 1.Aldığımız veriler bloklanır uygulama yavaş çalışır yada çalışmaz. En yukarıdaki örnek
// 2. Aldığımız veriler yanlış olur yada bozulur. let x li örnek.

// JS Herzaman senkron çalışır ancak biz bunu manipule edip asenkron hale getiriyoruz.



// Call Stack = Bize fonksiyonların çalışma sıralarını verir.
// Async - await ve call stack bize fonksiyonların çalışma sıralarını manipüle etmemize yardımcı olur.

function funcs1() {
    console.log("Ben birinciyim");
    funcs2();
    console.log("Ben tekrar birinciyim");
}

function funcs2() {
    console.log("Ben ikinciyim");
    funcs3();
    console.log("Ben tekrar ikinciyim")
}

function funcs3() {
    console.log("Ben üçüncüyüm");
}


funcs1();

function add(x,y) {
    return x + y;
}

function ave(x,y) {
    return add(x,y) / 2;
}

let a = ave(6,8);
console.log(a);

// Başka Bir örnek daha yapalım
// Bu örnekde şunu anlatıyorum önce normal fonksiyonlar çalışır sonra callback fonksiyonlar çalışır
// setTimeOut = diğer döngü işleminden kısa sürmesine rağmen sonra çalışır neden çünkü single thread.
// Yani ilk önce CallStack daha sonra CallBack Event-Loop bunu ayarlıyor.
function tast(message) {
    let n = 10;
    while (n>0) {
        n--
    }
    console.log(message);
}


console.log("1");
setTimeout(() => {
    console.log("2");
},1000)
console.log("3");
console.log("4");

tast("İşlem tamamlandı");

// CallBack bize şu tamamlandıkdan sonra şunu yap diyen bir yapıdır async için ufak bir çözüm.

const myName = () => {
    console.log("Benim adım hasan");
}

setTimeout(myName,3000);

// CallBack'ler den en çok faydalandığımız yapı EventListener.

const btn = document.querySelector("button");

btn.addEventListener('click',() => {
    alert("You clicked me !");

    let pElem = document.createElement('p');
    pElem.textContent = "This is a newly-added paragraph";
    document.body.appendChild(pElem);

});

// JavaScript single thread ancak biz api'lerle vs iletişime geçince async yapısı çalışıyo bu bize multithread gibi gözüküyor ancak JS Single Threaddir.

// ============================================================

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

//listBooks();

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
}

addBook({name: "Sokratesin Savunması",author:"Plüton"},listBooks);




