function exercise() {

    var x = 8;

    var a = (x + 7) / (x - 3);

    if (x == 3) {
        console.log("ERROR! A fraction cannot have the denominater 0.");
    }
    else {
        console.log(a);
    }

    document.getElementById("result").innerHTML = a;

}