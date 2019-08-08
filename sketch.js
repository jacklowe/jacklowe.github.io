function setup() {
  frameRate(5);
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

var colours = ["#3bd326", "#c3bd32"];

function draw() {
  var randomIndex = Math.floor(Math.random() * colours.length);

  if (mouseIsPressed) {
    stroke(colours[randomIndex]);
    translate(mouseX - width / 2, mouseY - height / 2);
    torus(100, 20);
  }
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  rotateZ(frameCount * 0.1);
}

function keyPressed() {
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
