let serviceTax = 0.1;
let vat = 0.13;

let pizza = document.querySelector(".pizza");
let returnBill = document.querySelector("#returnBill");
let pizzaAmount = Number(document.querySelector(".pizzaAmount").textContent);
pizza.addEventListener("click", () => {
  //   console.log("madise");
  let total = pizzaAmount + serviceTax * pizzaAmount + vat * pizzaAmount;
  //   console.log(total);
  returnBill.textContent = `Your bill for 1 pizza is ${total} with ${serviceTax} service tax and ${vat} vat`;
});
