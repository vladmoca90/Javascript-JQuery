function send() {

    var firstN = document.getElementsByName("firstName")[0].value;

    if (firstN.length < 3) {
        alert("Your first name is too short!");
    }
    else {
        document.getElementsByTagName("span")[0].innerHTML = "";
    }

}
