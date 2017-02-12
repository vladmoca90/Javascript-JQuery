function calcYRoots() {

    delta = Math.sqrt(25);

    a = 1;

    b = -3;

    c = -4;

    var yOne = (-b + delta) / 2 * a;

    var frst = yOne;

    var yTwo = (-b - delta) / 2 * a;

    var scnd = yTwo;

    document.getElementById("rootYOne").innerHTML = frst;

    document.getElementById("rootYTwo").innerHTML = scnd;

}