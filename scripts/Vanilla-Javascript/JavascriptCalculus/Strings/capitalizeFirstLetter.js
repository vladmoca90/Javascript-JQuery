//A function that capitalizes each word in a text

function capitalizeEachElem(text) {

    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    var splitText = text.trim().split(' ');

    for (i = 0; i < splitText.length; i++) {
        splitText[i].charAt(0).toUpperCase();
    }

    return splitText.join(' ');
}