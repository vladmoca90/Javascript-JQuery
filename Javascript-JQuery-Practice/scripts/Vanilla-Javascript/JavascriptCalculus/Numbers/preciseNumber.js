//Calculate the precise value of a given numer

function preciseNumber(n) {

if(n < 0) {
    throw new Error("Then number must be greater than 0");
}
if(n == 0) {
    return 0;
}

return n.toPrecision();

}