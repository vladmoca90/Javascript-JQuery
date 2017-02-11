function calcLogRoots() {

    var frst = 2.07;

    var scnd = - 12.07;

    if (frst < 0) {
        document.getElementsByClassName("rootCondition").innerHTML = "Not a valid root. It is < 0";
    }
    else {
        document.getElementsByClassName("rootCondition").innerHTML = "";
    }

    if (scnd < 0) {
        document.getElementsByClassName("rootCondition").innerHTML = "Not a valid root. It is < 0";
    }
    else {
        document.getElementsByClassName("rootCondition").innerHTML = "";
    }

}