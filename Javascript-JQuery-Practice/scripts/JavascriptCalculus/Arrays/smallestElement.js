//smallest element in an array//

function min(array) {

    if (array.length == 0) {
        throw new Error("The list cannot be empty");
    }
    if (array.length == 1) {
        return array[0];
    }

    var minSoFar = array[0];

    for (var i = 0; i < array.length; i++) {

        if (array[i] < minSoFar) {
            minSoFar = array[i];
        }
    }

    return minSoFar;
}