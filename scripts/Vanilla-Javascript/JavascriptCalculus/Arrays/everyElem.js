//A function that returns true if all elements have a certain condition

function everyElem(array) {

    if(array.length == 0) {
        throw new Error('The array cannot be empty');
    }

   for(i=0; i<array.length; i++) {
       if(array[i] > 10) {
           return false;
       }
   }

    return true;
}