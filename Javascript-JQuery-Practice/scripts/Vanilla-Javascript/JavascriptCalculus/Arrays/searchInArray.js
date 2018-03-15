//search the element in an array//

function search(array, n) {
    //validations//
    if (array.length == 0) {
        return false;
    }
    if (array.length == 1) {
        if (n == array[0]) {
            return true;
        }
        else {
            return false;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return true;
        }
    }

    return false;
}