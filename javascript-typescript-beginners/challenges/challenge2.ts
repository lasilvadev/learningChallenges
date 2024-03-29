// Challenge
// Create a variable with the type "pending" or "shipped" or "delivered"
// If the variable is "pending" log to the console "Order is pendind!"
// If the variable is "shipped" log to the console "Arriving soon..."
// If the variable is "delivered" log to the console "Delivered!"

const order: "pending" | "shipped" | "delivered" = "pending";

if (order === "pending"){
    console.log("Order is pendind!");
}else if (order === "shipped") {
    console.log("Arriving soon...");
} else {
    //this branch will be reached if the variable is neither "pendind" or "deliveres"
    console.log("Delivered!");
}

//it can also be:
if (order === "pending"){
    console.log("Order is pendind!");
}else if (order === "shipped") {
    console.log("Arriving soon...");
} else if (order === "delivered") {
    //this branch will be reached if the variable is neither "pendind" or "deliveres"
    console.log("Delivered!")
} else {
    console.log("Delivered!")
}