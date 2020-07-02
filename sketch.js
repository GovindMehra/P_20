var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
 car = createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor="blue";
 car.velocityX = speed;
 deformation= 0.5 * weight * speed * speed / 22500
}

function draw() {
  background(255,255,255);  
  if(car.isTouching(wall) && deformation > 100){
  car.velocityX=0;
  car.shapeColor="green";
  }
  if(car.isTouching(wall) && deformation < 99 && deformation > 181){
    car.velocityX=0;
    car.shapeColor="yellow";
    }
    if(car.isTouching(wall) && deformation > 180){
      car.velocityX=0;
      car.shapeColor="red";
      }
      if(World.FrameCount%180===0){
        car.x=50;
        car.y=200;
        car.velocityX = speed;
      }
  drawSprites();
}