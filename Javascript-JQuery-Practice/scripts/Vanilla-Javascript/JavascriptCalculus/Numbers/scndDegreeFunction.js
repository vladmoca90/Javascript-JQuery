//A code for a second degree function

function secondDgr(a, b, c) {

    var ecuation = a * Math.pow(x, 2) + b * x + c;

    var roots = [x1, x2];

    var delta = Math.pow(b, 2) - 4 * a * c;

    x1 = [b - Math.sqrt(delta)] / (2 * a);

    x2 = -[b - Math.sqrt(delta)] / (2 * a);


    if (delta < 0) {
        throw new Error("equation is impossible");
    }
    if (delta == 0) {
        return x1 == x2;
    }
    if (delta > 0) {
        return x1 != x2;
    }

    return roots;
}