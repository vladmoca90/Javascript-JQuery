//A function that assigns values to an object

function addToStudent() {

    var student = {
        name: 'Lech Katchinsky',
        age: 25,
        nationality: 'Polish'
    };

    return Object.assign(student, {grade: 10, pastConvictions: false});
}