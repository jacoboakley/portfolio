var welcome = document.getElementById(shown);
shown.style.opacity = 1;
shown.style.transition = "opacity 3s";

var hiddenImage = document.getElementById(hidden);
hidden.style.transition = "opacity 3s";

function fade() {
  shown.style.opacity = 0;
  hidden.style.opacity = 1;
}

function unfade () {
  shown.style.opacity = 1;
  hidden.style.opacity = 0;
}
document.getElementById("button1").onclick = fade;
document.getElementById("button2").onclick = unfade;