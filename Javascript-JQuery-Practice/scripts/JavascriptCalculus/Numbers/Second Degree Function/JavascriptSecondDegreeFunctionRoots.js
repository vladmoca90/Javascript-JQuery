function calcRoots() {

    delta = 4;

    a = 1;

    b = -4;

    c = 3;

    frst = [b * 2 - Math.sqrt(delta)] / 2 * a;

    scnd = [-(b * 2) - Math.sqrt(delta)] / 2 * a;

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}