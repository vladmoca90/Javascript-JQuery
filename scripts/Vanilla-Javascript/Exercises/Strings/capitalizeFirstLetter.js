//A function that capitalizes each word in a text

function capitalizeFirstLetter(text) {

    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    var splitText = text.trim().split(' ');

    var capitalizedLetters = splitText[0].charAt(0).tuUpperCase();

    for (i = 0; i < splitText.length; i++) {
        capitalizedLetters = splitText[i].toUppercase();
    }

    return capitalizedLetters.join(' ');
}