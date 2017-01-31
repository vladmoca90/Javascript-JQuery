var northAmericanCountries = ["United States", "Canada", "Mexico"];

var southAmericanCountries = ["Colombia", "Peru", "Chile", "Bolivia", "Venezuela"];

document.getElementById("joinCountries").innerHTML = northAmericanCountries.concat(southAmericanCountries);

function AmericanCountries() {

    document.getElementById("joinCountries").innerHTML = northAmericanCountries.concat(southAmericanCountries);

}