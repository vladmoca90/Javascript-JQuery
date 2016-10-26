function firstName() {
    var firstN = document.getElementsByName("firstName")[0].value;
    if (firstN.length < 3) {
        document.getElementsByTagName("span")[0].innerHTML = "Your first name is too short!";
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }
}

function lastName() {
    var lastN = document.getElementsByName("lastName")[0].value;
    if (lastN.length < 3) {
        document.getElementsByTagName("span")[0].innerHTML = "Your last name is too short!";
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }
}