let xStartBall;
let yStartBall;
let xSpeed;
let ySpeed;
let canvas;
let ballX, ballY;

if (windowWidth <= 768) {
  ballX = 50;
  ballY = 50;
} else {
  ballX = 200;
  ballY = 200;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0, "fixed");
  canvas.style("z-index", "-20");
  xStartBall = random(1920);
  yStartBall = random(1897);
  xSpeed = 10;
  ySpeed = 10;
}

function draw() {
  clear();
  ellipse(xStartBall, yStartBall, ballX, ballY);
  noStroke();
  fill(0, 0, 255);

  xStartBall = xStartBall + xSpeed;
  yStartBall = yStartBall + ySpeed;

  if (xStartBall + 30 >= windowWidth) {
    xSpeed = -xSpeed;
    xStartBall = windowWidth - 30;
  } else if (xStartBall <= 0) {
    xSpeed = -xSpeed;
    xStartBall = 0;
  }

  if (yStartBall + 30 >= windowHeight) {
    ySpeed = -ySpeed;
    yStartBall = windowHeight - 30;
  } else if (yStartBall <= 0) {
    ySpeed = -ySpeed;
    yStartBall = 0;
  }
}
