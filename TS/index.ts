type Pizza = {
  id: number,
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "Ordered" | "Completed",
}

let nextPizzaId = 1
let cashInRegister = 100
const orderQueue: Array<Order> = []
let nextOrderId = 1

const menu: Array<Pizza> = [
  { id:nextPizzaId++, name: "Margherita", price: 8},
  { id:nextPizzaId++, name: "Pepperoni", price: 10},
  { id:nextPizzaId++, name: "Hawaiian", price: 10},
  { id:nextPizzaId++, name: "Veggie", price: 9},
]

function addNewPizza(pizzaObj: Omit<Pizza, "id">): void {
  const newObj: Pizza = {...pizzaObj, id: nextPizzaId++}
  menu.push(newObj)
}


function placeOrder(name: string): Order | undefined {
  const found = menu.find(pizza => pizza.name === name);
  if(!found) {
    console.log("not found") 
    return;
  }
  cashInRegister += found.price;
  const obj: Order = {
    id: nextOrderId++,
    pizza: found,
    status: "Ordered"
  }
  orderQueue.push(obj);
  return obj
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find(order => order.id === orderId);
  if(!order){
    return
  }
  order.status = "Completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof(identifier) === "string"){
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else {
    return menu.find(pizza => pizza.id === identifier)
  }
}

addNewPizza({ name: "Chicken Bacon", price: 12})
addNewPizza({ name: "BBQ Chicken", price: 11})
addNewPizza({ name: "Spicy Sausage", price: 10})

placeOrder("Chicken Bacon")
completeOrder(1)

console.log("Menu: ", menu)
console.log("Cash in Register: ", cashInRegister)
console.log("Order Queue: ", orderQueue)
