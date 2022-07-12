function randomColor() {
    var palette = "ABCDEF1234567890";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += palette[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];
    var colorNum = document.getElementById("hex");
    var newColor = randomColor();
    body.style.backgroundColor = newColor;
    button.style.backgroundColor = newColor;
    colorNum.innerHTML = "HEX Color: " + randomColor();
}