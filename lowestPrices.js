
    function lowestPrices(array){
        let result = {};
    
        for (let i = 0; i < array.length; i++) {
            let[town, product, price]  = array[i].split(" | ");
             price = Number(price);
            if(!result.hasOwnProperty(product)){
                result[product] = {
                    town,
                    price
                }
            }else if(result[product].price > price){
                result[product].price = price;
                result[product].town = town;
            }
        }
        let entries = Object.entries(result);
        for(let [product, townPrice ] of entries){
           
            console.log(`${product} -> ${townPrice.price} (${townPrice.town})`); 
        }
    }
lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
//Sample Product -> 1000 (Sample Town) 
//Orange -> 2 (Sample Town) 
//Peach -> 1 (Sample Town) 
//Burger -> 10 (New York)