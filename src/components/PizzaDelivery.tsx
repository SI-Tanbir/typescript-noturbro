



const menu = [
    {id:1, name: "Margherita", price: 8 },
    {id:2, name: "Pepperoni", price: 10 },
    {id:3, name: "Hawaiian", price: 10 },
    {id:4, name: "Veggie", price: 9 },
]



interface pizza{
    id:number
    name:string
    price:number


}

type Order ={
    id:number
    pizza:pizza
    status:"completed" | "ordered"

}


let cashInRegister = 10
let nextOrderId = 1
const orderQueue:Order[] = []

function addNewPizza(pizzaObj:pizza) {
    menu.push(pizzaObj)
}



function placeOrder(pizzaName:string) {


    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

      if(!selectedPizza){
        console.error(`${pizzaName} DOES ONT EXITS`)
    return 
    }

        cashInRegister += selectedPizza.price


  
    const newOrder:Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder 
}

function completeOrder(orderId:number) {
    const order = orderQueue.find(order => order.id === orderId)

    if(!order){
        console.error(`${orderId} was not found in the orderQueue`)


        return
    }

    order.status = "completed"
    return order
}


function getPizzaDetail(identifier:string | number){

    if(identifier === "string"){
        return menu.find(pizza=>pizza.name=== identifier)
    }
    else{
        return menu.find(pizza=>pizza.id===identifier)
    }


}

placeOrder("chicken bacon ranch")
completeOrder(1)


addNewPizza({id:menu.length + 1,name:"chicken Bacon ranch",price:12})
console.log("Menu:",menu)
console.log("Cash in register",cashInRegister)
console.log("Order queue",orderQueue)


// addNewPizza({name:"chicken Bacon ranch",cost:12})