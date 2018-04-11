//A function that returns a random number between a cartain interval

function randomNumber(min, max) {

    if (min > max) {
        throw new Error('The interval is invalid');
    }
    if (min == max) {
        return min;
    }

    return Math.floor(Math.random() * (max - min)) + min;
}