function calcLogRoots() {

    if (frst <= 0 || scnd <= 0) {
        document.getElementsByClassName("rootCondition").innerHTML = "Not a valid root. It is <= 0)";
    }
    else {
        document.getElementsByClassName("rootCondition").innerHTML = "";
    }

}