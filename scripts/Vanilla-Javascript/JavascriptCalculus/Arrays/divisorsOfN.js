//Given a array and an the number n, return all the numbers from the array that can be divided by n

function allDivisors(array, n) {

    if (n <= 0) {
        throw new Error("The n must be positive only");
    }

    if (array.length == 0) {
        return array;
    }

    var divisorsArray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] % n == 0) {
            divisorsArray.push(array[i]);
        }
    }

    return divisorsArray;
}