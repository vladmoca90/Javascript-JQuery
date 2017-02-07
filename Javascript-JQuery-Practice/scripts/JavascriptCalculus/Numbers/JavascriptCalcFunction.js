function exercise() {

    var a = [(x + 1) / (x - 3)];

    var x = 3;

    if (x == 3) {
        console.log("ERROR! A fraction cannot have the denominater 0.");
    }
    else {
        console.log(x);
    }

    document.getElementById("result").innerHTML = x;

}