const h2 = document.querySelector("h2");

function handleResize() {
  var intViewportWidth = window.innerWidth;
  if (intViewportWidth < 100) {
    document.body.className = "red";
  } else if (intViewportWidth < 300) {
    document.body.className = "orange";
  } else if (intViewportWidth < 500) {
    document.body.className = "yellow";
  } else if (intViewportWidth < 700) {
    document.body.className = "green";
  } else if (intViewportWidth < 900) {
    document.body.className = "blue";
  } else if (intViewportWidth < 1100) {
    document.body.className = "navy";
  } else {
    document.body.className = "purple";
  }
  h2.style.color = "white";
}
window.addEventListener("resize", handleResize);
