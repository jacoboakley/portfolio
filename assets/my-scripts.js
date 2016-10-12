var welcome = document.getElementById("shown");
welcome.style.opacity = 1;
welcome.style.transition = "opacity 3s";

var hiddenImage = document.getElementById("hidden")
hiddenImage.style.transition = "opacity 3s";

function fade() {
  welcome.style.opacity = 0;
  welcome.style.zIndex = -1;
  hiddenImage.style.opacity = 1;
  hiddenImage.style.zindex = 1;
}

function unfade () {
  welcome.style.opacity = 1;
  hiddenImage.style.opacity = 0;
}
document.getElementById("button1").onclick = fade;
document.getElementById("button2").onclick = unfade;