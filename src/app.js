console.log("Merhaba Kodlama.io")

// JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    // let olunca bu tarafın console'u farklı anlama geliyor
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 // bu hata veriyor

console.log(euroDun)

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")