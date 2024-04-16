function timeConvertor(num, unitType) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    switch (unitType) {
        case "days":
            days = num;
            hours = num * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            break;

        case "hours":
            days = num / 24;
            hours = num;
            minutes = num * 60;
            seconds = minutes * 60;
            break;

        case "minutes":
            minutes = num;
            seconds = minutes * 60;
            hours = num / 60;
            days = hours / 24;
            break;

        case "seconds":
            seconds = num;
            minutes = num / 60;
            hours = minutes / 60;
            days = hours / 24;

    }
    console.log(`Days: ${days}; Hours: ${hours}; Minutes: ${minutes}; Seconds: ${seconds}.`);
}
timeConvertor(86400, "seconds");