function previousday(year, month, day){
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
    console.log(myDate.toDateString());// za da ne izvagdam 1

}
previousday(2016, 9, 30);//2016-9-29
previousday(2015, 5, 10);//2015-5-9
