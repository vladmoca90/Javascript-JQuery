var asianCountries = ["Japan", "Taiwan", "South Korea", "Vietnam", "Thailand"];

document.getElementById("#countries") = asianCountries;

function asianCountriesPop() {

    asianCountries.pop();

    document.getElementById("#countriesPop") = asianCountries;

}

function asianCountriesPush() {

    asianCountries.push();

    document.getElementById("#countriesPush") = asianCountries;

}