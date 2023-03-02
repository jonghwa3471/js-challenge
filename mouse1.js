const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h1 = document.querySelector("h1");
const superEventHandler = {
  mouseEnter: () => {
    h1.style.color = colors[0];
    h1.innerText = "The mouse is here!";
  },
  mouseLeave: () => {
    h1.style.color = colors[1];
    h1.innerText = "The mouse is gone!";
  },
  resizeWindow: () => {
    h1.style.color = colors[2];
    h1.innerText = "You just resized";
  },
  rightClick: () => {
    h1.style.color = colors[3];
    h1.innerText = "That was a right click!";
  },
};

h1.addEventListener("mouseenter", superEventHandler.mouseEnter);
h1.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resizeWindow);
window.addEventListener("contextmenu", superEventHandler.rightClick);
