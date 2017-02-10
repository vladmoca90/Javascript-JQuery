function calcLogRoots() {

    delta = Math.sqrt(8);

    a = 5;

    b = 2;

    c = -3;

    var frst = (- b + delta) / 2 * a;

    var scnd = (-b - delta) / 2 * a;

    if (frst <= 0 || scnd <= 0) {
        document.getElementByClass("rootCondition").innerHTML = "Not a valid root. Is is <= 0)";
    }
    else {
        document.getElementByClass("rootCondition").innerHTML = "Not a valid root. Is is <= 0)"
    }

    document.getElementById("rootOne").innerHTML = frst;

    document.getElementById("rootTwo").innerHTML = scnd;

}