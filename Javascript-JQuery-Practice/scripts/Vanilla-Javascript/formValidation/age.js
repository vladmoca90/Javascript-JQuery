function send() {

    var age = document.getElementsByName("age")[0].value;

    if (age >= 18) {
        document.getElementsByTagName("span")[4].innerHTML = "Good! You are over 18.";
    }
    else {
        document.getElementsByTagName("span")[4].innerHTML = "You must be over 18 to complete the form!";
    }
}