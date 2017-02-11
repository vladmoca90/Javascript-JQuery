function calcDelta() {

    a = 1;

    b = -4;

    c = 3;

    var delta = b**2 - 4*a*c;

    document.getElementById("delta").innerHTML = delta;

}

/* 
    if (delta > 0) {
        alert("The roots are distinctive");
    }
    else if (delta == 0) {
        alert("The roots are equal");
    }
    else (delta < 0) {
        alert("The equation is imposible");
    }
*/