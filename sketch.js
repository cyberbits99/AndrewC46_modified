var bg,bg2,form,system,code,security;
var car1
var car2
var car1_img, car2_img;
var score=0;

function preload() {
  bg = loadImage("background.jpg");
  bg2 = loadImage("helicopter.png")
  car1_img = loadImage("car1.png")
  car2_img = loadImage("car2.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  car1 = createSprite(100,350);
  car1.addImage('car1', car1_img);

  car2 = createSprite(100,390);
  car2.addImage('car2', car2_img);
  car2.scale= 0.8;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("City Escaped Yay!!",250, 200);

  }

  camera.position.y = car1.position.y-100;
  //camera.position.x = car2.position.x;
  drawSprites();
}