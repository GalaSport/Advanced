class footballTeam{

    conctructor(clubName, country){
        this. clubName = clubName,
        this.country = country,
        this.invitedPlayers = []  //Hint: You can add more properties to help you finish the task.
    }
    inputProcessing(input){

    }

    newAdditions(footballPlayers){ //footballPlayers (array of strings)
        // ["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"…]

        let [name, age, playerValue] = footballPlayers.split("/");
         console.log(name, age, playerValue);
        
        let checkName = this.invitedPlayers.find((el) => el.footballPlayers == footballPlayers)


        if(checkName){
            if(checkName.playerValue < this.footballPlayers.playerValue){
                checkName.playerValue == playerValue;
            }
            this.invitedPlayers.push({name, age, playerValue});

        }
    //In all cases, you must finally return a string in the following format:
        return `You successfully invite ${name1}, ${name2}, ${nameN}.`
        

        //Note: When returning the string, keep in mind that the different names of football Players
        // must be:
      // Unique - for instance:
        
" You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres " - is a correctly returned string
        
" You successfully invite Kylian Mbappé, Lionel Messi, Kylian Mbappé "- is not a correctly returned string
        
// Separated by comma and space (, )



    }

    signContract(selectedPlayer){

    }

    ageLimit(name, age){

    }

    transferWindowResult(){

    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
//You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.