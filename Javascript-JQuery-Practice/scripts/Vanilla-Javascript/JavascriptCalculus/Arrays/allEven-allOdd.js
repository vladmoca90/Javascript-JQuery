// A function that returns true if all 3 elements are even

//First case

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

//Second case

function allEven(array) {

 var a = array[0];
 var b = array[1];
 var c = array[2];

 return a % 2 == 0 && b % 2 == 0 && c % 2 == 0;

}

//Return true is all numbers are odd

function allOdd(array) {

 var a = array[0];
 var b = array[1];
 var c = array[2];

 return a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0;

}