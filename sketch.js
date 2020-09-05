var seaimg,shipimg,vehicleimg,playerimg;
var ship,player,vehicle;

function preload(){
seaimg = loadImage("sea.gif");
shipimg = loadAnimation("Shipimg.png");
vehicleimg = loadImage("submersiblevehicle.png");
playerimg = loadImage("character1.jpg");
}

function setup() {
  createCanvas(displayWidth*2,700);
  ship = createSprite(400, 200, 50, 50);
  ship.addAnimation("ship",shipimg);
 // player = createSprite(420,200,50,50);
  //player.addImage("player",playerimg);
  vehicle = createSprite(ship.x,ship.y,50,50);
  vehicle.addImage("vehicle",vehicleimg);
  vehicle.visible = false;
}

function draw() {
  background(seaimg); 
 
  if  (keyDown("RIGHT_ARROW"))
{
  ship.velocityX=10;
  ship.velocityY=0;
}
  if   (keyDown("left"))
  {
    ship.velocityX=-10;
    ship.velocityY=0;
  }
if(ship.x >=2800){
  text("Congrats you have successfully reached the Mariana Trench and your submersible vehicle is ready",displayWidth-200,100);
  vehicle.velocityY = 2;
  vehicle.visible = true;
}
  drawSprites();
}