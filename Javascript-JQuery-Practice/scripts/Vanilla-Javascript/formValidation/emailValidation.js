function send() {

    var emailValid = document.getElementsByName("mail")[0].value;

    if (emailValid.indexOf("@") <= 0 ||
        emailValid.indexOf("@") != emailValid.lastIndexOf("@") ||
        emailValid.lastIndexOf(".") <= (emailValid.indexOf("@") + 2) ||
        emailValid.lastIndexOf(".") > (emailValid.length - 3) ||
        emailValid.lastIndexOf(".") < (emailValid.length - 5) ||
        emailValid.indexOf(" ") >= 0) {
        alert("Email is not valid!");
    }
    else {
        document.getElementsByTagName("span")[2].innerHTML = "";
    }
}