//sum of the elements of an array//

function sum(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        if (array[0])
            return array[0];
    }

    var total = array[0];

    for (i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}