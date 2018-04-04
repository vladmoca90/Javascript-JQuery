//A function that returns true if all elements have a certain condition

function forEveryElem(array) {

    if(array.length == 0) {
        throw new Error('The array cannot be empty');
    }

   for(i=0; i< array.length; i++) {
       array.every(function() {
           return array[i] < 10;
       });
   }

    return true;
}