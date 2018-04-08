//A function that returns the dublicated element in an array

function commonElem(array) {

    if (array.length == 0) {
        throw new Error('Array cannot be empty');
    }

    if (array.length == 1) {
        console.log('THe array has one element only. There no common');
    }

    if (array.length == 2) {
        if (array[0] == array[1]) {
            return array
        } else {
            console.log('THe array has different elements. There no common');
        }
    }

    var counter = 0;

    for (i = 0; i < array.length; i++) {
        array[i] == common;
    }

    return common;
}