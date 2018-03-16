//A function that returns the number of even elements in an array

function numberOfEvenElements(array) {

 if (array.length == 0) {
  throw new Error("The array is empty");
 }
 if (array.length == 1) {
  if (array[0] % 2 == 0) {
   return array.length;
  } else {
   return 0;
  }
 }

 var count = 0;

 for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
   count++;
  }
 }

 return count;

}