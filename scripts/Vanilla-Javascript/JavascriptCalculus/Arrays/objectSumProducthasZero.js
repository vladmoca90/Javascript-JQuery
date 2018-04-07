//A function that receives an array of numbers and returns and object with the following properties:
//the sum of all numbers, the product of all numbers and if the value 0 exists or not. 
/*
{
    sum: 15,
    product: 12,
    hasZero: false
}
*/
function calculateProperties(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        return {
            sum: array[0],
            product: array[0],
            hasZero: array[0] == 0
        }
    }

    var sum = 0;

    var product = 1;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }

    return {
        sum: sum,
        product: product,
        hasZero: product == 0
    };
}