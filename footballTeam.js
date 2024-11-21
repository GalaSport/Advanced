class footballTeam{

    constructor(clubName, country){
        this. clubName = clubName,
        this.country = country,
        this.invitedPlayers = [], 
        this.signedPlayers = []
    }

        newAdditions(footballPlayers) {
            footballPlayers.map(p => {
                let [name, age, playerValue] = p.split('/');
                age = Number(age);
                playerValue = Number(playerValue);
    
                let player = this.invitedPlayers.find(p => p.name == name);
                if (player) {
                    if (player.playerValue < playerValue) {
                        player.playerValue = playerValue;
                    }
                } else {
                    this.invitedPlayers.push({ name, age, playerValue });
                }
            });
            let result = [];
            this.invitedPlayers.map(p => {
                result.push(p.name);
            });
            return `You Successfully invite ${result.join(', ')}.`;
        }
    
    signContract(selectedPlayer){//string "{name}/{playerOffer}"

        selectedPlayer.map(p => {
            let [name, playerOffer] = p.split('/');
            playerOffer = Number(playerOffer);
            
        let checkPlayer = this.invitedPlayers.find((el) => el.name == name);
        if(!checkPlayer){
            throw new Error (`${selectedPlayer} is not invited to the selection list!`);
        }
        });


//If the playerOffer selected by the manager for a given player
// is less than the value recorded in the array invitedPlayers, 
//an error with the following message should be thrown:

"The manager's offer is not enough to sign a contract with {name}, {priceDifference} million more are needed to sign the contract!"

//priceDifference - is the difference between playerValue and playerOffer.

//Otherwise, if the above conditions are not met, you must replace playerValue with the string "Bought"

//Finally, you need to return the string in the following format:

"Congratulations! You sign a contract with {BoughtPlayer} for {BuyingPrice} million dollars."

    }

    ageLimit(name, age){

    }

    transferWindowResult(){

    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// Uncaught Error: Barbukov is not invited to the selection list!