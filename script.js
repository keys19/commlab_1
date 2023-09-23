var i = 0;
var txt = 'Appreciation Archive';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("Appreciation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}