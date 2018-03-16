 //A function that compares the length of two arrays and returns the longest one

 function longestArray(x, y) {

  var longest = [];

  if (x.length > y.length) {
     return x.concat(longest);
  } else if(x.length == y.length) {
   throw new Error("The arrays are equal");
  }
  else {
     return y.concat(longest);
  }

  return longest;

 }