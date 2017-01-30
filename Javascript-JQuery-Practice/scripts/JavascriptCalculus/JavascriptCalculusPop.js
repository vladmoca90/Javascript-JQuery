var asianCountries = ["Japan", "Taiwan", "South Korea", "Vietnam", "Thailand"];

document.getElementById("#countriesPop") = asianCountries;

function asianCountriesPop() {

    asianCountries.pop();

    document.getElementById("#countriesPop").innerHTML = asianCountries;

}