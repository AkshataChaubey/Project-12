var jaxon, jaxonImage;
var path, pathImage;
var invisibleboundaryright;
var invisibleboundaryleft;

function preload() {
  //pre-load images

  jaxonImage = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup() {
  createCanvas(600, 400);
  background("black");
  //create sprites here
  path = createSprite(200, 200);
  path.addImage("path", pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  jaxon = createSprite(300, 230, 10, 10);
  jaxon.addAnimation("Runner", jaxonImage);
  jaxon.scale = 0.05;
  invisibleboundaryright = createSprite(350, 230, 50, 100);
  invisibleboundaryleft = createSprite(50, 230, 50, 100);
  invisibleboundaryright.visible = false;
  invisibleboundaryleft.visible = false;
}

function draw() {
  drawSprites();
  if (path.y > 400) {
    path.y = height / 2;
  }
  jaxon.x = mouseX;
  jaxon.collide(invisibleboundaryright);
  jaxon.collide(invisibleboundaryleft);
}
