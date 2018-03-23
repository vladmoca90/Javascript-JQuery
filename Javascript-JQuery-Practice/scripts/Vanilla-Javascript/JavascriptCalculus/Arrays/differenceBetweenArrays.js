//A function that finds the difference between two arrays and returns a new array with the diferences
//Both arrays have 3 elements

function findDifference(array1, array2) {

    var difArray = [];

    if (array1.length == 0 || array2.length == 0) {
        throw new Error("None of the arrays can be empty");
    }

    if (array1.length == 1 && array2.length == 1) {
        if (array1[0] == array2[0]) {
            return diffArray;
        }
        if (array1[0] != array2[0]) {
            return array1.concat(array2);
        }
    }

    for (i = 0; i < array1.length; i++) {
        var isInSecondArray = false;

        var isInFirstArray = false;

        for (j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                isInSecondArray = true;
                break;
            }
        }

        if (!isInSecondArray) {
            difArray.push(array1[i]);
        }

    }

     for (j = 0;j < array2.length; j++) {

        var isInFirstArray = false;

        for (i = 0; i < array1.length; i++) {
            if (array2[j] == array1[i]) {
                isInFirstArray = true;
                break;
            }
        }

        if (!isInFirstArray) {
            difArray.push(array2[j]);
        }

    }

    return difArray;

}