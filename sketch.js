var path;
var pathImg;
var run;
var runImg;
var invisiblepath;
var invisiblepath2;


function preload(){
  pathImg = loadImage("path.png");
  runImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.3;
  path.velocityY = 4;

  run = createSprite(200,300);
  run.addAnimation("running", runImg);
  run.scale = .08;

  invisiblepath = createSprite(20,200,20,400);
  invisiblepath.visible = false;

  invisiblepath2 = createSprite(400,200,20,400);
  invisiblepath2.visible = false;
}

function draw() {
  background(0);

  run.collide(invisiblepath);
  run.collide(invisiblepath2);


  if (path.y > 400){
    path.y =  height/2;
  }
  drawSprites();
  run.x = mouseX
}
