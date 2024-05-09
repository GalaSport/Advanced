const firstPerson = {
    name: "Peter",
    prof: "Fisherman",
    sharedInfo: function(){
        console.log(`${this.name} works as a ${this.prof}`);
    }
}
firstPerson.sharedInfo();
const secondPerson = {
    name: "Adam",
    prof: "businessman"
}
firstPerson.sharedInfo.apply(secondPerson);
//Peter works as a Fisherman
//Adam works as a businessman
