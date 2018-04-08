//A function that joins the elements of an array into a string

function joinArray(array) {
    if (array.length == 0) {
        throw new Error('The array cannot be empty');
    }

    return array.join();
}