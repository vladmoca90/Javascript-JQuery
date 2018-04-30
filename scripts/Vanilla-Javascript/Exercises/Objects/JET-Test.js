//Please write some object oriented code in JavaScript The code should be made as reusable as possible. 
//It should tell me how many letter e’s are in the following sentence ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.’, 
//how many number 1s are in the following number 17272838119191929838299111
//the result of 7 + 5

function TextUtilities() {
    this.countLetters = function (text, letter) {
        
        var count = 0;

        for (var i = 0; i < text.length; i += 1) {
            if (text[i] === letter) {
                count += 1;
            }
        }

        return count;
    }
}

var textUtils = new TextUtilities();

console.log(textUtils.countLetters('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.', 'e'));
//returns 10

function MathUtilities() {

    this.add = function (a, b) {
        return a + b;
    }
    this.countDigit = function (number, digit) {

        var count = 0;

        for (i = 0; i < number.toString().length; i++) {
            if (number.toString().charAt(i) == digit) {
                count++
            }
        }

        return count;
    }
}

var mathUtils = new MathUtilities();

console.log(mathUtils.countDigit(17272838119191929838299111, 1)); //returns 5

console.log(mathUtils.add(7, 5)); //returns 12