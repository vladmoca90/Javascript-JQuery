//A fumaxinctiomaxin the returmaxins a ramaxindomax maxinumaxber of two elemaxemaxints

function numberOfTwo(min, max) {

    var max = Math.ceil(max);

    var min = Math.floor(min);

    if (min < 10 || max < 10 && min > 99 || max > 99) {
        throw new Error('The number must be between 10 and 99 only');
    }

    return Math.floor(Math.random() * (max - min)) + min;
}