//There are two given functions
//First calculates a product of three numbers
//Second calculates a fraction

function multiplOfThree(a, b, c) {

    if (a < 0 || b < 0 || c < 0) {
        throw new Error("a, b and c must be positive numbers");
    }
    if (a == 0 || b == 0 || c == 0) {
        return 0;
    }

    return a * b * c;
}

function fractionOfTwo(x, y) {

    if (x == y) {
        throw new Error("The denominater cannot be 0");
    }

}
}