// let dragX, dragY, moveX, moveY;

var img;
var cnv;

var x = 50;
var b = 200;
let bugs = []; // array of Jitter objects
let circleX = 700;
let circleY = 150;

//Noise mountain movement working
let inc = 0.004;
let start = 0;

var song;
var button;

// Mountain draw
    // const mountain = {
    //   seed: null,
    //   scaler: 0.003,
    //   pos: {
    //     x: 0,
    //     y: 0,
    //   },
    // };

function preload() {
  img = loadImage("firefly.png");
  // song = loadSound("piano.mp3");
}

function centerCanvas() {
  var c = (windowWidth - width) / 2;
  var d = (windowHeight - height) / 2;
  cnv.position(c, d);
}


function setup() {
    // createCanvas(1550, 900);
    cnv = createCanvas(1550, 900);
    centerCanvas();

    // song = loadSound("piano.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);

    background(10, 10, 100);
    frameRate(50);


  // Create objects jitter bugs
    for (let i = 0; i < 50; i++) {
      bugs.push(new Jitter());
  }

// Mountain Draw
  // mountain.seed = random(30000);
}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}

function windowResized() {
  centerCanvas();
}


function draw() {
// background(10, 10, 100);
background(10, 10, 100,20);


//moving mountain line WORKING
push();
translate(0, 200);
stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    // let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  endShape();
  
  start += inc;
  pop();


// Mountain Draw
      // push();
      // // background(10, 10, 100,5);
      // fill('#363837');
      // mountain.pos.y = noise((mountain.seed += mountain.scaler)) * height;
      //   // stroke("#131721");
      //   stroke('#969997');
      //   line(mountain.pos.x, height, mountain.pos.x, mountain.pos.y);
      //   mountain.pos.x++;
      // pop();





  
// Wave graph MOUNTAIN
// push();
// translate(0,180);
// stroke(255);
// strokeWeight(4);
// // noFill();
// beginShape();
// for (var x = 0; x < width; x++) {
// var nx = map(x, 0, width, 0, 4);
// var y = height * noise(nx);
// vertex(x, y);
// }
// endShape();
// pop();

  // //Mouse movement
  //   noStroke();
  //   fill(242, 212, 65);
  //   ellipse(dragX, dragY, 20, 20);
  //   fill(255, 234, 130);
  //   ellipse(moveX, moveY, 20, 20);


  //Moon
  push();
  translate(190,15);
  fill(255, 255, 255);
  noStroke ();
  ellipse (300,100, 125, 125);

    //circle background for MOON
    fill(10, 10, 100);
    noStroke ();
    ellipse (275,100, 125, 125);
    pop();


    //Ground circle
    // push();
    // fill('#501687');
    // ellipse(200, 270, 1900, 220);
    // pop();

    //Ground 2
    push();
    translate(0, 700);
    noStroke();
    fill('#db8fff');
    quad(0, 40, 1600, -20, 5000, 400, -40, 400);
    pop();


    //Jitter bugs
push();
noStroke();
fill(242, 212, 65);
  for (let i = 0; i < bugs.length; i++) {
      bugs[i].move();
      bugs[i].display();
    }
pop();

    //Tree R Trunk
    push();
    noStroke();
    fill('#004e8a');
    rect(1320, 200, 45, 750);
    pop();

    //Tree R Top - light blue
    push();
    noStroke();

    fill('#8adcff'); //light bottom
    ellipse(1330, 250, 200, 120);

    fill('#8adcff'); //light top
    ellipse(1440, 130, 200, 150);

    fill('#8adcff'); //light left
    ellipse(1175, 110, 250, 150);

    fill('#65bfe6'); //blue O L
    ellipse(1298, 80, 200, 130);

    fill('#6cc1e6'); //dark
    ellipse(1180, 200, 190, 130);

    fill('#7fcef0'); //blue
    ellipse(1300, 160, 200, 100);

    fill('#78ccf0'); //blue O
    ellipse(1420, 195, 180, 120);

    pop();


    //Tree L Trunk
    push();
    noStroke();
    fill('#004e8a');
    rect(189, 400, 32, 500);
    pop();

      //Tree Top L
      push();
      noStroke();

      fill('#6cc1e6'); //dark
      ellipse(110, 340, 170, 110);

      fill('#5ab1d6'); //blue O
      ellipse(280, 320, 190, 110);
      
      fill('#78ccf0'); //blue O
      ellipse(205, 400, 230, 115);

      fill('#8adcff'); //light bottom
      ellipse(170, 280, 180, 100);

      fill('#9ee2ff'); //light bottom
      ellipse(320, 360, 145, 100);

      pop();

//PINE TREE middle (regular triangles)
      //Trunk
      push();
      noStroke();
      fill('#077ea6');
      rect(657, 680, 13, 50);
      pop();

      //Bottom
      push();
      translate(593, 600);
      noStroke();
      fill('#33b877');
      triangle(40, 100, 70, 20, 110, 100);
      pop();      
      // TOP
      push();
      translate(593, 560);
      noStroke();
      fill('#6cf0b0');
      triangle(40, 90, 80, 35, 100, 90);
      pop();

//PINE TREE right (triangles)
    //Trunk
      push();
      noStroke();
      fill('#077ea6');
      rect(1450, 650, 13, 50);
      pop();

    //Bottom
      push();
      translate(1380, 565);
      noStroke();
      fill('#33b877');
      triangle(40, 100, 70, 20, 110, 100);
      pop(); 

    // TOP
      push();
      translate(1375, 525);
      noStroke();
      fill('#6cf0b0');
      triangle(40, 90, 80, 45, 110, 90);
      pop();

//PINE TREE left (triangles)
    //Trunk
      push();
      noStroke();
      fill('#077ea6');
      rect(80, 700, 13, 50);
      pop();
    
    //Bottom
      push();
      translate(13, 616);
      noStroke();
      fill('#33b877');
      triangle(40, 100, 70, 20, 110, 100);
      pop();

     // TOP
      push();
      translate(10, 572);
      noStroke();
      fill('#6cf0b0');
      triangle(40, 90, 80, 45, 110, 90);
      pop();




//Pine trunk (small)
push();
fill('#002a9e');
noStroke();
rect(432, 697, 15, 50);
pop();

//PINE TREE Bottom (small)
push();
translate(400,650);
stroke('#0258e3');
strokeWeight(2);
for (let y = 60; y < 90; y++) {
    let x = randomGaussian(40, 40);
    line(40, 1, x, y);
  }
pop();

//PINE TREE Middle (small)
push();
translate(400,600);
stroke('#4f9bff');
strokeWeight(.7);
for (let y = 50; y < 70; y++) {
    let x = randomGaussian(40, 32);
    line(40, 1, x, y);
  }
pop();

// random Gaussian PINE TREE Top 1 (small)
push();
translate(400,570);
stroke('#8fcfff');
strokeWeight(.7);
for (let y = 20; y < 40; y++) {
    let x = randomGaussian(40, 22);
    line(40, 1, x, y);
  }
pop();



//Pine trunk (BIG)
push();
fill('#002a9e');
noStroke();
rect(1036, 675, 18, 70);
pop();

//PINE TREE Bottom (BIG)
push();
translate(1000,530);
stroke('#0258e3');
strokeWeight(2);
for (let y = 130; y < 180; y++) {
    let x = randomGaussian(40, 60);
    line(40, 2, x, y);
  }
pop();

//PINE TREE Bottom (Middle)
push();
translate(1000,450);
stroke('#4f9bff');
strokeWeight(1.2);
for (let y = 60; y < 110; y++) {
    let x = randomGaussian(40,40);
    line(40, 5, x, y);
  }
pop();

//PINE TREE Bottom (TOP)
push();
translate(1000,400);
stroke('#8fcfff');
strokeWeight(.8);
for (let y = 50; y < 70; y++) {
    let x = randomGaussian(40, 30);
    line(40, 1, x, y);
  }
pop();


    // //Grass (not working) ????
    // push();
    // translate(100,400);
    // rotate(PI / 1.7);
    // fill(159, 240, 156);
    // for (let i = 0; i < 8; i++){
    // bezier(100, 20, 40, 10, 50, 60, 15, 80);
    // }
    // pop();


  //Grass function draw 2
  for (var x = 10; x < 2000; x = x+10){
    for (var y = 3; y< 500; y = y+21){
      push();
      noStroke();
      translate(x,y);
      drawGrass();
      pop();
    }
  }
    

  for (var x = 10; x < 2000; x = x+30){
    for (var y = 5; y< 500; y = y+50){
      push();
      noStroke();
      translate(x,y);
      drawGrass2();
      pop();
    }
  }





// //Mouse movement (NEW) press transparency????
// push();
// background("#ffffff05")
//   if(mouseIsPressed==true) {
//     fill(242, 212, 65);
//     stroke(mouseX, 0, mouseY);
//     strokeWeight(10);
//     point(mouseX-5, mouseY-5);
//     point(mouseX*-1+600, mouseY-5);
//   }
//   pop();


//Arrow Keys PINK CIRCLE
push();
fill('#ff96bb');
noStroke();
if (keyIsDown(UP_ARROW)) {
  circleY--;
}
if (keyIsDown(DOWN_ARROW)) {
  circleY++;
}
if (keyIsDown(LEFT_ARROW)) {
  circleX--;
}
if (keyIsDown(RIGHT_ARROW)) {
  circleX++;
}

// circle(circleX, circleY, 15);
image(img, circleX, circleY);
pop();



//FIREFLY CURSOR
noCursor();
image(img, mouseX, mouseY);
// Press mouse circle drag (LIGHT TRAIL)
push();
frameRate(200);
translate(0,31);
fill('#fd91ff');
noStroke();
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 14);
  } 
  pop();

}  //END DRAW









// draw ellipse the size of x(50) at position mouseX and mouseY
// function mousePressed() {
//   fill(b, mouseY, mouseX);
//   circle(mouseX, mouseY, x);
// }

//Green circle mouse clicked
// function mouseClicked() {
//   fill(0, 255, 0);
//   circle(mouseX, mouseY, 50);
// }

// // press ENTER to reset canvas
// function keyPressed(){
//   if (keyCode == ENTER) {
//     background(10, 10, 100)
//   }
// }

// function mousePressed() {
//   fill(b, mouseY, mouseX);
//    rectMode(CENTER);
//    rect(mouseX, mouseY, x, x);
// }


  


//Draw grass pattern 2, with function in draw field
function drawGrass() {
  fill(159, 240, 156);
  translate(0,800)
  rotate(-4);
  bezier(100, -5, 50, 5, 70, 60, 20, 90);
}

function drawGrass2() {
  fill(60, 186, 48);
  translate(0,800)
  rotate(-4);
  bezier(100, -5, 50, 5, 70, 60, 20, 90);
}

// function drawCircles(x, y){
//     ellipse(x, y - 25, 10, 10);
//     ellipse(x, y, 10, 10);
//     ellipse(x, y + 25, 10, 10);
// }

        // function mouseMoved() {   // Move gray circle
            // moveX = mouseX;
            // moveY = mouseY;
          // }

          // function mouseDragged() { // Move black circle
            // dragX = mouseX;
            // dragY = mouseY;
          // }


  // Jitter class
class Jitter {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(8, 18);
      this.speed = 1;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

 