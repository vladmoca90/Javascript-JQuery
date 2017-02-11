function calcLogRoots() {

    var frst = 2.07;

    if (frst < 0) {
        document.getElementById("rootConditionOne").innerHTML = "Not a valid root. It is < 0";
    }
    else {
        document.getElementById("rootConditionOne").innerHTML = "";
    }

    var scnd = -12.07;

    if (scnd < 0) {
        document.getElementById("rootConditionTwo").innerHTML = "Not a valid root. It is < 0";
    }
    else {
        document.getElementById("rootConditionTwo").innerHTML = "";
    }

}