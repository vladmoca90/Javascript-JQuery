//A function that returns a random number between a cartain interval

function randomNumber(n, m) {

    if (n == null || m == null) {
        throw new Error('Both values are null');
    }
    if (n > m) {
        throw new Error('The interval is invalid');
    }
    if (n == m) {
        return n;
    }

    return Math.random() * (m - n);
}