let COLOUR;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  COLOUR = getComputedStyle(document.documentElement).getPropertyValue(
    "--colour"
  );
  stroke(COLOUR);

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  clear();
}
