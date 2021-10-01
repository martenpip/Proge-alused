let arr = [5,8,4,2,3,1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4) {
    console.log(arr[i])
  } else {
    arr[i]++
  }
}



for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4) {
      console.log(arr[i])
    } else {
      arr[i]++
    }
  }



  let arr = [5,8,4,2,3,1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4)
      console.log(arr[i]+" on suurem kui 4")
    else
      console.log(arr[i]+" on 4 või väiksem")
  }


  

  let arr = [5,8,4,2,3,1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4)
    console.log(arr[i]+" on suurem kui 4")
  else
    console.log(arr[i]+" on 4 või väiksem")
}

let onSuuremKuiNeli = 0
for(let i=0; i<arr.length; i++) {
  if (arr[i] > 4)
    onSuuremKuiNeli++
}
console.log(onSuuremKuiNeli + " numbrit on suurem kui 4")
console.log((arr.length - onSuuremKuiNeli) + " numbrit on väiksemad kui 4")