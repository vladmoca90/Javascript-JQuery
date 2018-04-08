//A function that returns the dublicated element in an array

function commonElem(array) {

    if (array.length == 0) {
        throw new Error('Array cannot be empty');
    }

    if (array.length == 1) {
        console.log('The array has one element only. There no common');
    }

    if (array.length == 2) {
        if (array[0] == array[1]) {
            console.log('The array has two different elements. There no common');
        } else {
            return array[0];
        }
    }

    var common;

    for (i = 0; i < array.length; i++) {
        for (i = j; i < array.length; j++) {

        }
    }

    return common;
}