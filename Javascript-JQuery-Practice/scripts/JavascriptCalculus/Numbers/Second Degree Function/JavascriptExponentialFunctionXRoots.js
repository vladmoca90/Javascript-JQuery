function calcXRoots() {

    var frst = [Math.log(4)] / [Math.log(3)];

    var scnd = [Math.log(-1)] / [Math.log(3)];

    document.getElementById("rootXOne").innerHTML = frst;

    document.getElementById("rootXTwo").innerHTML = scnd;

}

/* 
    if(frst <= 0 || scnd <= 0) {
        document.getElementsByClassName("rootsConditions").innerHTML = "The root is not valid";
    }
    else {
        document.getElementsByClassName("rootsConditions").innerHTML = "";
    }
*/