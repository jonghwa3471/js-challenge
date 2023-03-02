const body = document.querySelector("body");

function colorChange() {
  const width = window.innerWidth;
  if (width < 900) {
    body.className = "black";
  } else if (width >= 900 && width <= 1400) {
    body.className = "orange";
  } else {
    body.className = "purple";
  }
}

window.addEventListener("resize", colorChange);
