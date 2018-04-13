//A function that returns all the numbers divisible by m up to n

function numbersDivisibleTo() {

    var count = 0;

    for (i = 1; i < 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            count++;
        }
    }

    return count;
}