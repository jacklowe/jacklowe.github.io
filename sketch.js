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

// function keyPressed() {
//   clear();
// }

// function draw() {
//   background(102);
//   rotateY(frameCount * 0.01);

//   for (let j = 0; j < 5; j++) {
//     push();

//     fill(102);
//     for (let i = 0; i < 80; i++) {
//       translate(
//         // sin(frameCount * 0.001 + j) * 100,
//         sin(frameCount * 0.001 + j) * 100,
//         0,
//         0
//         // i * 0.1
//       );
//       rotateZ(frameCount * 0.002);
//       push();
//       sphere(8, 6, 4);
//       pop();
//     }
//     pop();
//   }
// }
