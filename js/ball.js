let xStartBall;
let yStartBall;
let xSpeed;
let ySpeed;
let canvas;
let SizeBall;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0, "fixed");
  canvas.style("z-index", "-20");
  xStartBall = random(1920);
  yStartBall = random(1897);
  xSpeed = 3;
  ySpeed = 3;
  SizeBall = 45;
}

function draw() {
  clear();
  ellipse(xStartBall, yStartBall, SizeBall, SizeBall);
  noStroke();
  fill(255, 255, 0);

  const mediaQuery = window.matchMedia('(min-width: 768px)')
  if (mediaQuery.matches) {
    SizeBall = 200;
  }

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

// $(window).scroll(function () {
//   //After scrolling 100px from the top...
//   if ($(window).scrollTop() >= 60) {
//       $('body').css('background-color', '#000');
//       $('#header').css('background-color', '#000');
//       $('body').css('color', 'white');
//       $('a').css('color', ' white');
//       $('.tag-proj').css('color', ' white');
//       $('body').css('transition', '3s');
//       //Otherwise remove inline styles and thereby revert to original stying
//   } else {
//       $('body').css('background-color', '');
//       $('body').css('color', '');
//       $('a').css('color', '');
//       $('.tag-proj').css('color', '');
//       $('body').css('transition', '2s');
//   }
// });
