class footballTeam{

    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []; 
        this.signedPlayers = [];
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
    
    signContract(selectedPlayer){

        let selectedPlayerArray = selectedPlayer.split('/');
            let name = selectedPlayerArray[0];
            let playerOffer = selectedPlayerArray[1];
            playerOffer = Number(playerOffer);
            
        let checkPlayer = this.invitedPlayers.find((el) => el.name == name);
        if(!checkPlayer){
            throw new Error (`${name} is not invited to the selection list!`);
        }
        
        if(playerOffer < checkPlayer.playerValue){
            let priceDifference = checkPlayer.playerValue - playerOffer;
            throw new Error (`The manager's offer is not enough to sign a contract with ${checkPlayer.name}, ${priceDifference} million more are needed to sign the contract!`);
        }else{
            checkPlayer.playerValue = "Bought";
            return `Congratulations! You sign a contract 
            with ${checkPlayer.name} for ${playerOffer} million dollars.`
         
        }
    }

    ageLimit(name, age){
        age = Number(age);

        let checkName = this.invitedPlayers.find((player) => player.name == name);
        if(!checkName){
        throw new Error (`${name} is not invited to the selection list!`);
        }
        if(checkName.age < age){ 
        let difference = age - checkName.age;
        if(difference < 5 ){
            return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
        }
        if(difference > 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
        }
        if(checkName.age >= age){
            return `${name} is above age limit!`
        }
    }

    transferWindowResult(){

    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.