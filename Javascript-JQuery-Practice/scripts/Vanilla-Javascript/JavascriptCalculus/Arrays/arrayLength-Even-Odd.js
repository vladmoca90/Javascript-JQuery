//A function that returns true if the length of an array is even

function arrayLengthIsEven(array) {

    if(array.length == 0) {
        throw new Error("The array is empty");
    }

    if(array.length % 2 != 0) {
        return false;
    }

    return true;

}

//A function that returns true if the length of an array is odd

function arrayLengthIsOdd(array) {

    if(array.length == 0) {
        throw new Error("The array is empty");
    }

    if(array.length % 2 == 0) {
        return false;
    }

    return true;

}