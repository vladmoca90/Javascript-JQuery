function calcYRoots() {

    delta = Math.sqrt(25);

    var a = 1;

    var b = -3;

    var c = -4;

    var yOne = (-b + delta) / 2 * a;

    var frst = yOne;

    var yTwo = (-b - delta) / 2 * a;

    var scnd = yTwo;

    document.getElementById("rootYOne").innerHTML = frst;

    document.getElementById("rootYTwo").innerHTML = scnd;

}