//A function that uses .map()

function arrayMapping(array) {
    if (array.length == 0) {
        throw new Error('Array cannot be empty');
    }

    var mappedArray = [];

    for (i = 0; i < array.length; i++) {
        array.map(function () {
            return mappedArray.push(array[i] * 2);
        });
    }

    return mappedArray;
}