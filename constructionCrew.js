function constructionCrew(workerObject){
   
    let kg = workerObject.weight;
    let year = workerObject.experience;
    let water = 0.1 * kg * year;

   if(workerObject.dizziness == true){
    workerObject.levelOfHydrated += water;
    workerObject.dizziness == false;
    console.log(workerObject);
}else{
    console.log(workerObject);
}
}
constructionCrew({ weight: 80,
experience: 1,
levelOfHydrated: 0,
dizziness: true });//{ weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }