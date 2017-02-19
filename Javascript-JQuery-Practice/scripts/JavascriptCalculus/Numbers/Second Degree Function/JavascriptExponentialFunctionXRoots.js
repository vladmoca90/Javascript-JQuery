function calcXRoots(y1, y2, base) {

    if(base<=0) {
        alert("The base cannot be negative");
        return;
    }

    if(y1 <= 0) {
        document.getElementById("rootXOne").innerHTML = "The root is not valid";
    }
    else {
        var frst = [Math.log(y1)] / [Math.log(base)];

        document.getElementById("rootXOne").innerHTML = frst;
    }

    if(y2 <= 0) {
        document.getElementById("rootXTwo").innerHTML = "The root is not valid";
    }
    else {
        var scnd = [Math.log(y2)] / [Math.log(base)];

        document.getElementById("rootXTwo").innerHTML = scnd;
    }


}

/* 
    if(frst <= 0 || scnd <= 0) {
        document.getElementsByClassName("rootsConditions").innerHTML = "The root is not valid";
    }
    else {
        document.getElementsByClassName("rootsConditions").innerHTML = "";
    }
*/