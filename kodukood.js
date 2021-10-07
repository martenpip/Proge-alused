Math.random () *10;{

}

let sign = prompt("Sisesta üks number 1-10-ni");
//let sign = prompt teeb nii et sonum tuleks ette 
if (sign.toLowerCase() == Math.floor(Math.random() * 10) + 1) {
  alert("Yay! Arvasid õige numbri ära!");
}

