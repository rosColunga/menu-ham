var animatedElement = document.getElementById("animate");
var animationId = 10;
var position = -100;

function animate() {
    if (position === 38) {
        clearInterval(id);
    } else {
        position++;
        animatedElement.style.left = position + 'px';
    }
}

function appear() {
  id = setInterval(animate, .8);
}
