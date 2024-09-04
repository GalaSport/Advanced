
class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);//складово пространство
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) { //зареждане на магазина, необходимо пространство

        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.")
        }
        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`

    }
    quantityCheck(product, minimalQuantity) {
        let included = this.products.find((el) => el.product == product)
        if (!included) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        if (included.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        } else {
            let difference = minimalQuantity - included.quantity;
            included.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }
    sellProduct(product) {
        let checkProduct = this.products.find((p) => p.product == product);
        if (!checkProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        checkProduct.quantity--;
        this.sales.push({ product, quantity: 1 })
        return `The ${product} has been successfully sold.`
    }
    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!")
        }
        let result = [`You sold ${this.sales.length} products today!`, `Products in the warehouse:`];
        for (let { product, quantity } of this.products) {
            result.push(`${product}-${quantity} more left`);
        }
        return result.join('\n');
    }
};
const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.sellProduct('keyboard'));


// The headphones has been successfully delivered in the warehouse.
// The laptop has been successfully delivered in the warehouse.
// You have enough from product headphones.
// You added 5 more from the laptop products.
// The headphones has been successfully sold.
//  The laptop has been successfully sold.
//  Uncaught Error Error: There is no keyboard in the warehouse.

