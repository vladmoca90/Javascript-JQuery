function calcLogRoots() {

    delta = Math.sqrt(8);

    var a = 5;

    var b = 2;

    var c = -3;

    var yOne = (-b + delta) / 2 * a;

    var frst = yOne.toFixed(2);

    var yTwo = (-b - delta) / 2 * a;

    var scnd = yTwo.toFixed(2);

    var frst = 2.07;

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}