//An array of objects that has the properties of cars and returns an array with specific values from the object

var cars = [{
        model: 'Volvo',
        country: 'Sweden',
        number: '34BR345',
    },
    {
        model: 'Honda',
        country: 'Japan',
        number: '06GF090',
    },
    {
        model: 'Lada',
        country: 'Russia',
        number: '11EE779',
    },
    {
        model: 'Mercedes',
        country: 'Germany',
        number: '00JY676',
    }
];

function chooseCar(n) {

    if (n < 0 || n > 2) {
        throw new Error('The number must be 0, 1 or 2');
    }

    return Object.values(cars[n]);
}