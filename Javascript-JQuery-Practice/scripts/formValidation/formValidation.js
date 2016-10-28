function firstName() {

    var firstN = document.getElementsByName("firstName")[0].value;

    if (firstN.length < 3) {
        document.getElementsByTagName("span")[0].innerHTML = "Your first name is too short!";
    }
    else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }
}

function lastName() {

    var lastN = document.getElementsByName("lastName")[1].value;

    if (lastN.length < 3) {
        document.getElementsByTagName("span")[1].innerHTML = "Your last name is too short!";
    }
    else {
        document.getElementsByTagName("span")[1].innerHTML = "";
    }
}

function mail() {

    var emailValid = document.getElementsByName("validEmail")[0].value;

    if (
        emailValid.indexOf("@") <= 0 ||
        emailValid.indexOf("@") != emailValid.lastIndexOf("@") ||
        emailValid.lastIndexOf(".") <= (emailValid.indexOf("@") + 2) ||
        emailValid.lastIndexOf(".") > (emailValid.length - 3) ||
        emailValid.lastIndexOf(".") < (emailValid.length - 5) ||
        emailValid.indexOf(" ") >= 0
    ) {
        document.getElementsByTagName("span")[3].innerHTML = "Email is not valid!";
    }
    else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }
}

function passwrd() {

    var p1 = document.getElementsByName("pass")[0].value;
    var p2 = document.getElementsByName("pass")[0].value;

    if (p1.length < 6) {
        document.getElementsByTagName("span")[2].innerHTML = "Parola prea scurta";
    }
    else {
        document.getElementsByTagName("span")[2].innerHTML = "";
    }
    if (p1 != p2) {
        document.getElementsByTagName("span")[3].innerHTML = "Parola neverificata!";
    }
    else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }
}

function ageValidation() {

    var age = document.getElementsByName("age")[0].value;

    if (age >= 18) { document.getElementsByTagName("span")[4].innerHTML = "Good! You are over 18."; }

    else { document.getElementsByTagName("span")[4].innerHTML = "You must be over 18 to complete the form!"; }
    ;
}
