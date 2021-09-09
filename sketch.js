var bg,sleepa, brushA, gyma, eata, batha, movea;
var ast;

function preload(){
  bg= loadImage("iss.png");
  sleepa = loadAnimation("sleep.png");
  brushA = loadAnimation("brush.png");
  gyma = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
  eata = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  batha = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
 movea = loadAnimation("move1.png","move1.png","move2.png","move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  ast = createSprite(300,230);
  ast.addAnimation("sleeping", sleepa);
  ast.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("Red")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  ast.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    ast.addAnimation("brushing", brushA);
    ast.changeAnimation("brushing");
    ast.y = 350;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    ast.addAnimation("gymming", gyma);
    ast.changeAnimation("gymming");
    ast.y = 350;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    ast.addAnimation("eating", eata);
    ast.changeAnimation("eating");
    ast.x = 150;
    ast.y = 350;
    ast.velocityX = 0.5;
    ast.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    ast.addAnimation("bathing", batha);
    ast.changeAnimation("bathing");
    ast.x = 300;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }

  if(keyDown("m")){
    ast.addAnimation("moving", movea);
    ast.changeAnimation("moving");
    ast.velocityX = 1;
    ast.velocityY = 1;
  }

}