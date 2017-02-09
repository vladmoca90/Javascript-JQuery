function calcLogRoots() {

    delta = 64;

    a = 5;

    b = 2;

    c = -3;

    x = [- b + Math.sqrt(64)] / 2 * a;

    y = [-b - Math.sqrt(64)] / 2 * a;

    document.getElementById("rootOne").innerHTML = x;

    document.getElementById("rootTwo").innerHTML = y;

}