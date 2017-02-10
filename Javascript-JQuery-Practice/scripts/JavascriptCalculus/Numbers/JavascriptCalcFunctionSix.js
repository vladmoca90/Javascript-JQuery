function exerciseSix() {

    var u = Math.sin(Math.PI);

    var f = Math.log(u**2) + [2*Math.log(u + 1)]**2;

    var resultSix = f.toFixed(2);

    document.getElementById("resultSix").innerHTML = resultSix;

}