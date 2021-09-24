// array []
// object {}

//         0    1   2   3   4   5   6
let et = [10, 12, 15, 12, 13, 15, 11];
console.log (et)
console.log(et [tahaTeada])

let tahaTeada = prompt("Valitud kuu!");
let et = [1,5,7,3,3,4,1,2,9,4,9,5];
console.log(et[tahaTeada]);

let tahaTeada = prompt("Valitud kuu!");
let et = [1,5,7,3,3,4,1,2,9,4,9,5];
let kuu = ["Jaanuar","Veebruar","Marts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsembr"]
console.log(kuu[tahaTeada-1]+" tarbimine on "+et[tahaTeada-1]); 


//for
//while

for(let i=1; i < 100; i ++) {
console.log(i)
}

let x=1;
while(x <100) {
    console.log(x);
    x++; // kui unustad x++ siis kood kaib lopmatult
}

//increment = 1, number = index
//numbrid 1-99

let toota=true;
while(toota) {
    console.log(x);
    if (new Date().getMinutes > 24)
    toota = false;
}

const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
for (let i=1; i <= 47; i++) {
    console.log(i)
   
}

//string.contains()
//string.indexOf()