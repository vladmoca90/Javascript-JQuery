//A function that calculates a fraction

function calculateFraction(a, b) {

    if(a != 0 && b == 0) {
        throw new Error("b cannot be 0");
    }
    if(a == 0 && b != 0) {
        return 0;
    }

    return a/b;
}