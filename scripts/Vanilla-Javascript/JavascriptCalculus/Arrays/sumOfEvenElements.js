//sum of all even elements in an array//

function evenSum(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        if (array[0] % 2 == 0) {
            return array[0];
        } else {
            throw new Error("The only number in the array is not even");
        }
    }

    var even = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even += array[i];
        }
    }

    return even;
}