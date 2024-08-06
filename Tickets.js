function tickets(array, sortingCriterion){
    let ticketsArray = [];
 class Ticket{

    constructor(destination, price, status){

        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

    for (let i = 0; i < array.length; i++) {

        let tokens = array[i].split("|");
        let destination = tokens[0]; 
        let price = Number(tokens[1]);
        let status = tokens[2];

        let myTicket = new Ticket(destination, price, status);
        ticketsArray.push(myTicket);
        
    }
    return sortTicket(ticketsArray, sortingCriterion);

    function sortTicket(array, criteria){

        return array.sort((a, b) => {
            return criteria === "price" ?
            a[criteria] - b[criteria] :
            a[criteria].localeCompare(b[criteria])}
        )
    } 
}   
let result = tickets(['Philadelphia|94.20|available', 
    'New York City|95.99|available', 
    'New York City|95.99|sold',
    'Boston|126.20|departed'], "status");
 console.log(result);
       