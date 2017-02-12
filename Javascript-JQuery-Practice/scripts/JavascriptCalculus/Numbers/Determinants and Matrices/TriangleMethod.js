function calcTrian() {

    a = 0; b = -1; c = 0;

    d = -1; e = 0; f = 7;

    g = -5; h = 16; i = -11;

    x = a*e*i + d*h*c + g*b*f - c*e*g - a*f*h - d*b*i;

    document.getElementById("result").innerHTML = x;
}