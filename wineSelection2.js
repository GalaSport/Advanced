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
        this.wines.push({wineName, wineType, price, paid: "false"});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){
        let findedWineName = this.wines.find((el) => el.wineName = wineName);
        if(!findedWineName){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if(this.bill >= price){
            throw new Error (`${wineName} has already been paid.`)
        }
       
        this.bill += price;
        this.wines.paid = "true";
        return `You bought a ${wineName} for a ${price}$.`
        
    }

    openBottle(wineName){

        let foundWine = this.wines.find((el) => el.wineName = wineName);
        if(!foundWine){
            throw new Error ("The wine, you're looking for, is not found.");
        }

        if(this.wines.paid == "false"){ 
            throw new Error (`${wineName} need to be paid before open the bottle.`)
      }  
       
       let newWines = this.wines.filter(el => el.wineName !== wineName);
       this.wines = newWines;
       return  `You drank a bottle of ${wineName}.`
     
    }

    cellarRevision(wineType){

        if(!wineType){
            let emptySlots = space - this.wines.length;
         let result = [`You have space for ${ emptySlots } bottles more.`,
             `You paid ${this.bill}$ for the wine.`]

             for(let {wineName, wineType, paid: "false"} of this.wines){
                result.push(`${wineName} > ${wineType} - ${Has Paid / Not Paid}.`)
             }



         return result.join('\n');
        

        }else{
            let foundWine = this.wines.find((el) => el.wineName = wineName);
            if(!foundWine){
                throw new Error ( `There is no ${wineType} in the cellar.`);
            }

    return `${wineName} > ${wineType} - ${Has Paid / Not Paid}.`
     
        }

    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));
//You reserved a bottle of Bodegas Godelia Mencía Rose wine.
//Bodegas Godelia Mencía > Rose - Not Paid.
