function exercise() {

    var a = [(x + 1) / (x - 3)];

    var x = 2;

    if (x == 3) {
        console.log("ERROR! A fraction cannot have the denominater 0.");
    }
    else {
        console.log(a);
    }

    document.getElementById("result").innerHTML = a;

}