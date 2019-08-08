function setup() {
  frameRate(5);
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

var colours = ["#47e376", "#e39f47", "#ed49d4"];
// var colours = ["#47e376"];
var shapes = [];

function draw() {
  var randomIndex = Math.floor(Math.random() * colours.length);
  if (mouseIsPressed) {
    stroke(255);
    fill(colours[randomIndex]);

    translate(mouseX - width / 2, mouseY - height / 2);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    rotateZ(frameCount * 0.1);
    box(80, 24);

    torus(80, 25);
  }
}

function keyPressed() {
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
