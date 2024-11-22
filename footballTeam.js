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

        let selPlayer = selectedPlayer.map(p => {
            let [name, playerOffer] = p.split('/');
            playerOffer = Number(playerOffer);
            
        let checkPlayer = this.invitedPlayers.find((el) => el.name == name);
        if(!checkPlayer){
            throw new Error (`${selPlayer} is not invited to the selection list!`);
        }
        });
        if(playerOffer < checkPlayer.playerValue){
            let priceDifference = checkPlayer.playerValue - playerOffer;
            throw new Error (`The manager's offer is not enough to sign a contract with 
                 ${checkPlayer.name}, ${priceDifference} million more are needed to sign the contract!`);
        }else{
            this.invitedPlayers.playerValue = "Bought";
            return `Congratulations! You sign a contract 
            with ${checkPlayer.name} for ${this.invitedPlayers.playerValue} million dollars.`
        }
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