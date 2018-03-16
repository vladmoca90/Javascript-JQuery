  //A function that calculates how many times you have a letter in a string
  function letterCount(string, letter, capitalLetter) {

   var count = 0;

   if (!capitalLetter) {
     string = string.toUpperCase();
     letter = letter.toUpperCase();
   }
   for (var i = 0, l = string.length; i < string.length; i += 1) {
      if (string[i] === letter) {
        count += 1;
    }
   }

   return count;
  }