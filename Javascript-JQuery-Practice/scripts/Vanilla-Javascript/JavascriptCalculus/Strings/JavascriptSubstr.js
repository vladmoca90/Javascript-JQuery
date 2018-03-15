function substrFunction() {

    var pos = document.getElementById("substrTxt").innerHTML;

    var sbtr = pos.substr(7, 22);

    document.getElementById("substrResult").innerHTML = sbtr;

}