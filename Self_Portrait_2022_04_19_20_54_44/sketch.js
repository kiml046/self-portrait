function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //arms
  noFill();
  stroke(167, 131, 222);
  strokeWeight(15);
  arc(200, 390, 290, 290, PI, 0)
  
  //body
  noStroke();
  fill(167, 131, 222);
  ellipse(200, 400, 250, 500)
  
  //belly
  noStroke();
  fill(221, 211, 237);
  ellipse (200, 470, 125, 250);
  
  //ears
  noStroke();
  fill(167, 131, 222);
  triangle(30, 100, 30, 200, 200, 150);
  triangle(370, 100, 370, 200, 200, 150);
  
  noStroke();
  fill(127, 106, 161);
  triangle(40, 110, 40, 200, 200, 150);
  triangle(360, 110, 360, 200, 200, 150);
  
  //head
  noStroke();
  fill(127, 106, 161);
  ellipse(200, 210, 350, 250)
  
  noStroke();
  fill(167, 131, 222);
  ellipse(200, 200, 350, 250)
  
  //nose
  noStroke();
  fill(104, 88, 130)
  triangle(170, 230, 210, 230, 190, 240)
  
  //MOUTH
  noFill();
  stroke(104, 88, 130);
  strokeWeight(2);
  arc(205, 235, 30, 40, 0, PI)
  arc(173, 235, 30, 40, 0, PI)
  
  eye();
}

function eye() {
  let e_x1 = map(mouseX, 10, 355, 170, 180);
  let e_x2 = map(mouseX, 0, 355, 250, 260);
  let e_x3 = map(mouseX, 0, 355, 90, 100)
  
  let e_y1 = map(mouseY, 0, 255, 135, 138)
  let e_y2 = map(mouseY, 0, 255, 187, 190);
  let e_y3 = map(mouseY, 0, 255, 187, 190);
  
  noStroke();
  strokeWeight(1);
  fill(255)
  ellipse(190, 140, 50, 30);
  ellipse(270, 190, 50, 30);
  ellipse(110, 190, 50, 30 );
  
  fill(0);
  ellipse (e_x1, e_y1, 8, 12);
  ellipse (e_x2, e_y2, 8, 12);
  ellipse (e_x3, e_y3, 8, 12);
  
}