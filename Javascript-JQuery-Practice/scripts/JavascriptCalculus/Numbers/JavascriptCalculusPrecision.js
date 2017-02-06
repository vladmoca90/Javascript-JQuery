function firstFunction() {

    var x = document.getElementById("firstNumber").innerHTML;

    var y = x.toPrecision(7);

    document.getElementById("firstResultPres").innerHTML = y;

}