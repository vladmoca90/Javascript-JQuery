//A function that uses .map()
function listMapping(list) {
    if (list.length == 0) {
        throw new Error('List cannot be empty');
    }

    var mappedList = [];

    for (i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] * 2);
        });
    }

    return mappedList;
}