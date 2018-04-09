//A function that returns true if all elements in an list are even and false otherwise

function allElementsAreEven(list) {

    if (list.length == 0) {
        return false;
    }
    if (list.length == 1) {
        if (list[0] % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 != 0) {
            return false;
        }
    }

    return true;

}