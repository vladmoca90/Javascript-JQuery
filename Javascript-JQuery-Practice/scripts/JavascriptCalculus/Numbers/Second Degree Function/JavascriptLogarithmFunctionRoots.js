function calcLogRoots() {

    delta = Math.sqrt(8);

    a = 5;

    b = 2;

    c = -3;

    var yOne = (-b + delta) / 2 * a;

    var frst = yOne.toFixed(2);

    var yTwo = (-b - delta) / 2 * a;

    var scnd = yTwo.toFixed(2);

    if (frst <= 0 || scnd <= 0) {
        document.getElementById("rootConditionOne").innerHTML = "Not a valid root. It is <= 0";
    }
    else {
        document.getElementById("rootConditionTwo").innerHTML = "";
    }

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}