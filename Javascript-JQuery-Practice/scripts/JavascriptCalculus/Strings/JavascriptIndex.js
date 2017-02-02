function calcTxtIndex() {

    var str = document.getElementById("sentenceText").innerHTML;

    var pos = str.indexOf("Vlad");

    document.getElementById("calculateIndex").innerHTML = pos;

}