//Given an array, return the reverse of the array

function reverse(array) {

    for (i = 0, j = array.length - 1; i < array.length / 2 && j >= array.length / 2; i++, j--) {
        var a = array[i];
        var b = array[j];

        array[i] = b;
        array[j] = a;
    }

    return array;
}