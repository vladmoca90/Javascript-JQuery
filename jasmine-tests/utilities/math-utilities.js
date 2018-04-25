//A function that capitalizes each word in a text

function capitalizeFirstLetter(text) {

    if (text.trim() == '') {
        throw new Error('The text cannot be empty or whitespace');
    }

    if (text.length == 1) {
        return text.toUpperCase();
    }

    var splitText = text.trim().split(' ');

    var capitalizedLetters = [];

    for (i = 0; i < splitText.length; i++) {
        capitalizedLetters.push(splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1));
    }

    return capitalizedLetters.join(' ');
}