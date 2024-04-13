function fruit(fruit, qty , price){
    let weight = qty / 1000;
    let money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);//I need $4.50 to buy 2.50 kilograms orange.