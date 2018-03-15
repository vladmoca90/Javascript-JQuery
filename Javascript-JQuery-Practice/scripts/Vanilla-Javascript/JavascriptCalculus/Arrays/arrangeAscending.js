function sortArray(array) {
  var sortedArray = [];
  var a = array[0];
  var b = array[1];
  var c = array[2];


  if (a < b) {
    if (a < c) {
      sortedArray.push(a);

      if (b < c) {
        sortedArray.push(b);
        sortedArray.push(c);

      } else {
        sortedArray.push(c);
        sortedArray.push(b);
      }
    } else {
      sortedArray.push(c);
    }
  }

  if (b < c) {
    if (b < a) {
      sortedArray.push(b);

      if (a < c) {
        sortedArray.push(a);
        sortedArray.push(c);
      } else {
        sortedArray.push(c);
        sortedArray.push(a);
      }
    } else {
      sortedArray.push(a);
    }
  }

  if (c < a) {
    if (c < b) {
      sortedArray.push(c);
      if (b < a) {
        sortedArray.push(b);
        sortedArray.push(a);

      } else {
        sortedArray.push(b);
        sortedArray.push(a);

      }
    } else {
      sortedArray.push(b);
    }
  }

  return sortedArray;
}