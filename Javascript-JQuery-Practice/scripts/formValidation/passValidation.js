function send() {

    var p1 = document.getElementsByName("pass")[0].value;
    var p2 = document.getElementsByName("pass")[0].value;

    if (p1.length < 6) {
        alert("Password too short!");
    }
    else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }

    if (p1 != p2) {
        alert("Password in not checked!");
    }
    else {
        document.getElementsByTagName("span")[3].innerHTML = "";
    }
}