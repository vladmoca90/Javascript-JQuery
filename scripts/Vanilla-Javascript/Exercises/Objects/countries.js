//An array of objects with countries that uses various object methods

var countries = [
    {
        name: 'Portugal',
        population: 10, //in millions
        capital: 'Lisbon',
        language: 'Portuguese',
        otherCities: ['Porto', 'Funchal', 'Faro'],
        UNmember: true,
    },
    {
        name: 'United States',
        population: 315, //in millions
        capital: 'Washington DC',
        language: 'English',
        otherCities: ['Chicago', 'Los Angeles', 'New York'],
        UNmember: true,
    },
    {
        name: 'Israel',
        population: 8, //in millions
        capital: 'Jerusalem',
        language: 'Hebrew',
        otherCities: ['Tel Aviv', 'Haifa', 'Eilat'],
        UNmember: true,
    },
    {
        name: 'Australia',
        population: 24, //in millions
        capital: 'Canberra',
        language: 'English',
        otherCities: ['Brisbane', 'Melbourne', 'Sydney'],
        UNmember: true,
    },
    {
        name: 'Brazil',
        population: 193, //in millions
        capital: 'Brasilia',
        language: 'Portuguese',
        otherCities: ['Rio de Janeiro', 'Recife', 'Sao Paulo'],
        UNmember: true,
    },
    {
        name: 'Palestine',
        population: 4, //in millions
        capital: 'Ramallah',
        language: 'Arabic',
        otherCities: ['Bethleehem', 'Gaza', 'Hebron'],
        UNmember: false,
    },
    {
        name: 'India',
        population: 1135, //in millions
        capital: 'New Delhi',
        language: 'Hindi',
        otherCities: ['Madras', 'Mumbai', 'Varanasi'],
        UNmember: true,
    },
    {
        name: 'Morocco',
        population: 33, //in millions
        capital: 'Rabat',
        language: 'Arabic',
        otherCities: ['Fes', 'Marrakesh', 'Casablanca'],
        UNmember: true,
    },
];

function sortValuesOfCountries(countries) {

    var sortedNames = [];

    for (i = 0; i < countries.length; i++) {
        sortedNames.push(Object.values(countries[i].name));
    }

    return sortedNames.sort();
}