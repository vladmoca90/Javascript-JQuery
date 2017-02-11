function calcDeter() {

    a = 1; b = -5; c = 2;

    d = -1; e = 0; f = -4;

    g = 1; h = -2; i = 6;

    y = a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;

    document.getElementById("result").innerHTML = y;
}