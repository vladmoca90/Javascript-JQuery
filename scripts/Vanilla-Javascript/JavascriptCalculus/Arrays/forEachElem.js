//A function that increments each elements of an array

function forEachElem(array) {
    if (array.length == 0) {
        throw new Error('Array cannot be empty');
    }

    for (i = 0; i < array.length; i++) {
        array.forEach(function (n) {
            return array[i] = n;
        });
    }

    return array;
}