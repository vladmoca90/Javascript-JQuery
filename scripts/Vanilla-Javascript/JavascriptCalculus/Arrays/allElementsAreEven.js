//A function that returns true if all elements in an array are even and false otherwise

function allElementsAreEven(array) {

    if (array.length == 0) {
        return false;
    }
    if (array.length == 1) {
        if (array[0] % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            return false;
        }
    }

    return true;

}