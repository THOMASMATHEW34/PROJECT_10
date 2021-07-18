var sea;
var seaImage;
var ship;
var shipImage;
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200,);
  sea.addImage(seaImage);
sea.scale = 0.2;

ship= createSprite(200,200);
ship.addAnimation(shipImage);

}

function draw() {
  background("white");
  drawSprites();
}