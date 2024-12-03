let sayi1=35
let sayi2=5

let toplam = sayi1 + sayi2;
console.log(toplam, 'Toplam');

let fark = sayi1 - sayi2;
console.log(fark, 'Fark');

let carpim = sayi1 * sayi2;
console.log(carpim, 'Çarpım');

let bolum = sayi1 / sayi2;
console.log(bolum, 'Bölme');

console.log("Toplamın veri tipi= ",typeof toplam);




//number ve string ifadeyi toplarsak sonuç string olur birleştirme işlemi yapar örn:"5"+5="55" gibi
let a="5";
let b=5;
let birlestir = a+b;
console.log(birlestir,"string + number");

let esitmi = a == b; //== tip kontrolü yapmaz sadece değer kontrolü yapar
console.log(esitmi,"eşit mi ==");

let esitmi2 = a === b; ////eşit mi  eğer === yaparsak ayrıyeten veri tipini de kontrol eder
console.log(esitmi2,"eşit mi ===");

// && => ve operatörü   || => veya operatörü    ! => değil operatörü    != => eşit değil operatörü      




let name2= "emre";
let age= 25;

let info={
    name2:"irem",
    age: 40
} //bir obje oluşturduk ve içine name ve age değerlerini atadık class gibi düşünebiliriz
console.log(name2,age);
console.log(info.name2,info.age);



let arr=[1,2,3,{name2:"selen", age: 30},"selin",45,90,{
    name2:"enes",
    age: 50
}]; //bir array oluşturduk ve içine sayılar ve obje ve string değerler attık

console.log(arr[3].name2,arr);

