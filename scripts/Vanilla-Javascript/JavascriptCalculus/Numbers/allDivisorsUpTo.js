//A function that returns all the numbers divisible by m up to n

function numbersDivisibleWith(n, m) {

    var count = 0;

    for (i = 1; i < 100; i++) {
        if (i % n == 0 || i % m == 0) {
            count++;
        }
    }

    return count;
}

//A function that returns all the numbers divisible by m up to n

function numbersDivisibleWithAnd(n, m) {

    var count = 0;

    for (i = 1; i < 100; i++) {
        if (i % n == 0 && i % m == 0) {
            count++;
        }
    }

    return count;
}