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

//Return the reverse of an array with 3 elementsfunction inverse(array) {

function inverse(array) {

    var x = array[0];
    var y = array[1];
    var z = array[2];

    var reverseArray = [];

    reverseArray.push(z);
    reverseArray.push(y);
    reverseArray.push(x);

    return reverseArray;
}