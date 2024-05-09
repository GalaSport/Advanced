function sortArray(array, string) {

    if (string == "asc") {
        let sortedArray = array.sort((a, b) => a - b);
        return sortedArray;
    } else {
        let sortedArray = array.sort((a, b) => b - a);
        return sortedArray;
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));//[6, 7, 8, 14, 17]
sortArray([14, 7, 17, 6, 8], 'desc');//[17, 14, 8, 7, 6]