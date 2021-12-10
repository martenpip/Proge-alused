console.log("Order number", tellimus.orderNumber);
console.log("Client name", tellimus.clientName);

let sum = 0;
tellimus.rows.forEach((row) => {
   sum += row.price * row.amount;
});
console.log("Sum of products", sum);
