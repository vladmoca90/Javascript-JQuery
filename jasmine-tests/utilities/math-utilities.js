//Please write some object oriented code in JavaScript The code should be made as reusable as possible. 
//It should tell me how many letter e’s are in the following sentence ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.’, 
//how many number 1s are in the following number 17272838119191929838299111
//the result of 7 + 5

function textUtilities() {
    this.countLetters = function (text, letter) {

        if(text.length == 0) {
            return 0;
        }

        if(letter == null || letter.length == 0) {
            throw new Error('The letter cannot be empty or cannot have a null value');
        }

        var count = 0;

        for (var i = 0; i < text.length; i ++) {
            if (text[i] === letter) {
                count ++;
            }
        }

        return count;
    }
}

function mathUtilities() {

    this.add = function (a, b) {
        return a + b;
    }

    this.countDigit = function (number, digit) {

        if(number == null || digit == null) {
            throw new Error('The number of digit cannot have a null value');
        }

        if(digit < 0 || digit > 9) {
            throw new Error('The digit cannot be null or outside the interval of [0, 9]');
        }

       var textUtils = new textUtilities();

       return textUtils.countLetters(number.toString(), digit.toString());
    }
}