// A function that return true if all 3 elements are even

function allEven(array) {

 var a = array[0];
 var b = array[1];
 var c = array[2];

 if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
  return true
 } else {
  return false;
 }

}