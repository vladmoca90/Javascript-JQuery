function calcRoots() {

    delta = Math.sqrt(4);

    a = 1;

    b = -4;

    c = 3;

    var frst = (- b + delta) / (2 * a);

    var scnd = [-b - delta] / (2 * a);

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}