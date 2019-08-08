function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

function draw() {
  stroke("#47e376");
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
