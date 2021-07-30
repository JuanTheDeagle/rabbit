var garden,rabbit;
var gardenImg,rabbitImg;
var leaf1,leaf2,leaf3,leaf1img,leaf2img,leaf4img
var apple, appleimg






function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leaf1img = loadImage("orangeLeaf.png")
  leaf2img = loadImage("redImage.png")
  leaf3img = loadImage("leaf.png")
}

function createApple() {
  apple = createSprite(random(50,350),40,10,10)
  apple.velocityY=5
  apple.lifetime = 60
  apple.addImage(appleimg)
  apple.scale = 0.05
  rabbit.depth = apple.depth + 1
}
function createLeaf() {
  leaf1 = createSprite(random(50,350),40,10,10)
  leaf1.velocityY=5
  leaf1.lifetime = 60
  leaf1.addImage(leaf1img)
  leaf1.scale = 0.05
  rabbit.depth = apple.depth + 1
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

  if (frameCount%60===0 ) {
    createApple()
    createLeaf()
  }

  drawSprites();
}