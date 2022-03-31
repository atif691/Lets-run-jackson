var jaxon, jaxon_running;
var path, invisible_barrier1, invisible_barrier2, pathImg;

function preload(){
  jaxon_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  

  //moving background
  path = createSprite(200,200,400,400);
  path.addImage("path", pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  
//create jaxon sprite
jaxon = createSprite(200,330,40,40);
jaxon.addAnimation("running", jaxon_running);
jaxon.scale = 0.8

  //creating invisible barriers
  invisible_barrier1 = createSprite(0,200,10,400);
  invisible_barrier1.visible = false;

  invisible_barrier2 = createSprite(400,200,10,400);
  invisible_barrier2.visible = false;
}

function draw() {
  background(0);

  jaxon.collide(invisible_barrier1);
  jaxon.collide(invisible_barrier2);

  //code to reset the background
  if(path.y > 400){
    path.y = height/2;
    }

  //move jaxon using the arrow keys 
  if(keyDown("right")){
    jaxon.x = jaxon.x + 10;
  }

  if(keyDown("left")){
    jaxon.x = jaxon.x - 10;
  }
  
  drawSprites();
}
