//A function that filters an array

function filterArray(array) {

if(array.lenth == 0) {
    throw new Error('The array cannot be empty');
}

var result = array.filter(array => array.length > 6);

return result;

}