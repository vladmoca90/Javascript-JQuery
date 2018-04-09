//A function that filters an array
function filterArray(array) {

    if (array.lenth == 0) {
        throw new Error('The array cannot be empty');
    }

    for (i = 0; i < array.length; i++) {
        var result = array.filter(i => array.length > 6);
    }

    return result;
}