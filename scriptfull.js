const pizzas = [
  { name: "Пепперони", price: 400 },
  { name: "Гавайская", price: 350 },
  { name: "Мясная", price: 500 },
  { name: "Домашняя", price: 480 },
];

const drinks = [
  { name: "Буратино", price: 50 },
  { name: "Колокольчик", price: 75 },
  { name: "Sprite", price: 100 },
];

function calculateTotal(event) {
  event.preventDefault();
  let total = 0;
  let order = "";
  
  for (const pizza of pizzas) {
    const pizzaQuantity = parseInt(document.querySelector(`input[name="${pizza.name}"]`).value, 10);
    const pizzaPrice = pizzaQuantity * pizza.price;
    if (pizzaQuantity > 0) {
      order += `${pizzaQuantity} x Пицца ${pizza.name} (${pizza.price} рублей) = ${pizzaPrice} рублей <br>`;
    }
    total += pizzaPrice;
  }
  
  for (const drink of drinks) {
    const drinkQuantity = parseInt(document.querySelector(`input[name="${drink.name}"]`).value, 10);
    const drinkPrice = drinkQuantity * drink.price;
    if (drinkQuantity > 0) {
      order += `${drinkQuantity} x Напиток ${drink.name} (${drink.price} рублей) = ${drinkPrice} рублей <br>`;
    }
    total += drinkPrice;
  }
  
  document.getElementById("result").innerHTML = `Ваш заказ: <br> ${order} Общая стоимость заказа: ${total} рублей`;
}