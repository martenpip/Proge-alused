let katseidjarel = 3;

asi = Math.floor(Math.random() * 10) + 1;
console.log(asi);
//let sign = prompt("Sisesta üks number 1-10-ni");

while(katseidjarel > 0)  {
    sign = prompt("Sisesta üks number 1-10-ni"); 

    console.log(asi,sign)
    if (sign ==asi-1 || sign ==asi+1){
        console.log("Ai, sa pakkusid väga lähedale.")
    }

    if (asi == sign){
       console.log("Yay! Arvasid õige numbri ära!");
        break;
    }   
    else
        console.log("Sorry, X ei ole õige number.");
    katseidjarel -=1;
}
