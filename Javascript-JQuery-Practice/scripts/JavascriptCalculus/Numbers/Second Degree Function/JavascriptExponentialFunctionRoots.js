function calcRoots() {

    delta = Math.sqrt(5);

    a = 1;

    b = -3;

    c = -4;

    var yOne = (-b + delta) / 2 * a;

    var frst = yOne.toFixed(2);

    var yTwo = (-b - delta) / 2 * a;

    var scnd = yTwo.toFixed(2);

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}