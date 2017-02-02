function calcTxtLastIndex() {

    var pos = document.getElementById("sentenceSecondText").innerHTML;

    var str = pos.lastIndexOf("34");

    document.getElementById("calculateLastIndex").innerHTML = str;

}