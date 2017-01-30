var asianCountries = ["Japan", "Taiwan", "South Korea", "Vietnam", "Thailand"];

document.getElementById("countriesPop").innerHTML = asianCountries;

function asianCountriesPop() {

    asianCountries.pop("Indonesia");

    document.getElementById("countriesPop").innerHTML = asianCountries;

}