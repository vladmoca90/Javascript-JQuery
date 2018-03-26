//A function that increments the elements in an array by n

function incrementElements(array, n) {

    if (array.length == 0) {
        throw new Error('The array cannot be empty');
    }

    for (i = 0; i < array.length; i++) {
        array[i] += n;
    }

    return array;
}