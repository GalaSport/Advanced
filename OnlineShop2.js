class OnlineShop {

    constructor(warehouseSpace) {

        this.warehouseSpace = Number(warehouseSpace),//складова площ
        this.products = [],
        this.sales = []

    }

    loadingStore(product, quantity, spaceRequired){//необходимо място

        if (this.warehouseSpace < spaceRequired){
            throw new Error("Not enough space in the warehouse.");
        }
        this.products.push({product, quantity});
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){

     let productCheck = this.products.find((el) => el.product == product);
     if(!productCheck) {
        throw new Error  (`There is no ${product} in the warehouse.`)
     }  
     if(minimalQuantity <= 0){
        throw new Error ("The quantity cannot be zero or negative.");

     }
     if(minimalQuantity <= productCheck.quantity){
        return `You have enough from product ${product}.`
     }else{
        let difference = minimalQuantity - productCheck.quantity
        productCheck.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
     }

    }

    sellProduct(product){
    
        let checkProduct2 = this.products.find((el) => el.product == product);
        if(!checkProduct2){
            throw new Error (`There is no ${product} in the warehouse.`);
        }
        checkProduct2.quantity -= 1;
        this.sales.push({product, quantity: 1});
        return  `The ${product} has been successfully sold.`
    }

    revision(){
      if(this.sales.length == 0){
        throw new Error ("There are no sales today!");
      }
         
        let result = [`You sold ${this.sales.length} products today!`,`Products in the warehouse:` ];
        for (let {product, quantity} of this.products) {
            result.push(`${product}-${quantity} more left`);
        }
       return result.join('\n');
     
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
// The headphones has been successfully delivered in the warehouse.
// The laptop has been successfully delivered in the warehouse.
// You have enough from product headphones.
// You added 5 more from the laptop products.
// The headphones has been successfully sold.
// The laptop has been successfully sold.
// You sold 2 products today!
// Products in the warehouse:
// headphones-9 more left
// laptop-9 more left




