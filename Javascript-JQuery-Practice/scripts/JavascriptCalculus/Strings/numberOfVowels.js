//write a function that, given a text, returns the number of vowels in the text

function countVowels(text) {

    var count = 0;

    for (i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        if (isVowel(c)) {
            count++;
        }
    }

    return count;

}

function isVowel(c) {
    var v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');

    return v;
}