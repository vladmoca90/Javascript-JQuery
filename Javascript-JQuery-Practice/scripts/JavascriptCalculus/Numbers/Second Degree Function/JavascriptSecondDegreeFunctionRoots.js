function calcRoots() {

    delta = Math.sqrt(16);

    a = 1;

    b = -4;

    c = 3;

    frst = (b - delta) / (2 * a);

    scnd = [-b - delta] / (2 * a);

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}