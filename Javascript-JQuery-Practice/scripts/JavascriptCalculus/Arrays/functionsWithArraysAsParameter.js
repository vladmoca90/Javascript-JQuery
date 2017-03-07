//Write the following functions, each of them takes an array as a parameter
//head([]): returns the first element of the array
//tail([]): returns the array without the first element
//last([]): returns the last element of the array 

function head(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        return array[0];
    }

    return array[0];
}

function tail(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        return [];
    }

    var removeFirst = array.shift();

    return array;
}

function last(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        return array[0];
    }

    return array.pop();
}