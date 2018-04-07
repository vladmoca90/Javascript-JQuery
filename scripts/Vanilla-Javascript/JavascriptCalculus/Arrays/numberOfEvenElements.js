//A function that returns the number of even elements in an array

function numberOfEvenElements(array) {
    if (array.length == 0) {
        return 0;
    }

    if (array.length == 1) {
        return array[0] % 2 == 0 ? 1 : 0;
    }

    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            count++;
        }
    }

    return count;
}