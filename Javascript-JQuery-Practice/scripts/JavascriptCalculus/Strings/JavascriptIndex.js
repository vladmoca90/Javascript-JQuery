function sentenceIndex() {

    var totalText = document.getElementsByClassName("sentenceText").innerHTML;

    var calcIndex = totalText.indexOf("Vlad");

    document.getElementsByClassName("calculateIndex").innerHTML = calcIndex;

}