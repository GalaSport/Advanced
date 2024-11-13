class WineSelection {

    constructor(space){
        this.space =  Number(space),
        this.wines = [],
        this.bill = Number(this.bill)
    }

    reserveABottle (wineName, wineType, price){
        if(this.space <= this.wines.length){
            throw new Error ("Not enough space in the cellar.");
        }
        this.wines.push({wineName, wineType, price, paid: "false"});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){

    }

    openBottle(wineName){

    }

    cellarRevision(wineType){

    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley','Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.