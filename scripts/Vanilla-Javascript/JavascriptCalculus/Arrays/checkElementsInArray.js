//A function that checks if all elements in an array fulfill a certain condition

function checkElementsInArray(array) {

    if(array.length == 0) {
        throw new Error('The array cannot be empty');
    }

    for (i = 0; i < array.length; i++) {
        if(array[i] > 10) {
            return false;
        }
    }

    return true;
}