function send() {

    var lastN = document.getElementsByName("lastName")[0].value;

    if (lastN.length < 3) {
        alert("Your last name is too short!");
    }
    else {
        document.getElementsByTagName("span")[1].innerHTML = "";
    }

}