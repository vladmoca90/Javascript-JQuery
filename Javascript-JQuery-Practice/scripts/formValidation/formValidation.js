function firstName() {
    var firstN = document.getElementsByName("firstName")[0].value;
    if (firstN.length < 3) {
        document.getElementsByTagName("span")[0].innerHTML = "Your first name is too short!";
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }
}