//A function that finds the difference between two arrays and returns a new array with the diferences
//Both arrays have 3 elements

function findDifference(array1, array2) {

    var difArray = [];

     if (array1.length == 0 || array2.length == 0) {
        throw new Error("None of the arrays can be empty");
    }

    for (i = 0, j = 0; i < array1[i].length, j < array2[j].length; i++, j++) {
        if(array1[i] == array2[j]) {
            return difArray;
        }
        if(array1[i] != array2[j]) {
            return difArray.push(i);
        }
    }

    return difArray;

}