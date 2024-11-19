class WineSelection {

    constructor(space){
        this.space =  Number(space),
        this.wines = [],
        this.bill = 0
    }

    reserveABottle (wineName, wineType, price){
        if(this.space <= this.wines.length){
            throw new Error ("Not enough space in the cellar.");
        }
        this.wines.push({wineName, wineType, price, paid: false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){
        let findWineName = this.wines.find((el) => el.wineName == wineName);
        if(!findWineName){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if(findWineName.paid){
            throw new Error (`${wineName} has already been paid.`)
        }else{
            this.bill += price;
            findWineName.paid = true;

            return `You bought a ${wineName} for a ${price}$.`
        }
       
    }

    openBottle(wineName){

        let foundWine = this.wines.find((el) => el.wineName == wineName);
        if(!foundWine){
            throw new Error ("The wine, you're looking for, is not found.");
        }

        if(foundWine.paid == false){ 
            throw new Error (`${wineName} need to be paid before open the bottle.`)
        }  else{
            let newWines = this.wines.filter(el => el.wineName !== wineName);
            this.wines = newWines;
            return  `You drank a bottle of ${wineName}.`
        }
       
    }

    cellarRevision(wineType){
        let paid;

        if(!wineType){
            let emptySlots = this.space - this.wines.length;
         let result = [`You have space for ${ emptySlots } bottles more.`,
             `You paid ${this.bill}$ for the wine.`]

             const sortedArray = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

             for(let {wineName, wineType, paid} of sortedArray){

                if(paid == true){
                    paid = "Has Paid";
                }else{
                    paid = "Not Paid";
                }
                 
                result.push(`${wineName} > ${wineType} - ${paid}.`)
             }

         return result.join('\n');
        

        }else{
            let foundWine = this.wines.find((el) => el.wineType == wineType);
            if(!foundWine){
                throw new Error ( `There is no ${wineType} in the cellar.`);
            }
            if(foundWine.paid == true){
                paid = "Has Paid";
            }else{
                paid = "Not Paid";
            }
    return `${foundWine.wineName} > ${wineType} - ${paid}.`
     
        }

    }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 
console.log(selection.cellarRevision());
// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.
