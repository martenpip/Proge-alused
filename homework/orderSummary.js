console.log("orderNumber", tellimus.orderNumber);
console.log("clientName", tellimus.clientName);


let sum = 0;
tellimus.rows.forEach((row) => {
   sum += row.price * row.amount;
});
console.log("Kogusumma:", sum);

console.log ("Kogusumma käibemaks:", sum - sum /1.2)

for(let toode of tellimus.rows)
    console.log(toode.name)
