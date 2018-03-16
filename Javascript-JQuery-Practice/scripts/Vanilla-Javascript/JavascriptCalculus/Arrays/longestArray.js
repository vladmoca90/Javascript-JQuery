 //A function that compares the length of two arrays and returns the longest one

 function longestArray(x, y) {

  if (x.length > y.length) {
     return x;
  } else if(x.length == y.length) {
   throw new Error("The arrays are equal");
  }
  else {
     return y;
  }

 }