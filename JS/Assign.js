const car1 = {brand:"Honda", model:"Odyssey", color:"Red"};
const car2 = Object.assign({}, car1);

console.log(car2.brand, car2.model, car2.color);

car2.brand = "Nissan";
car2.model = "Altima";
car2.color = "Brown";
console.log(car2.brand, car2.model, car2.color);