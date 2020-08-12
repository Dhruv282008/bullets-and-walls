var car1 ,wall,thickness;
var speed,weight;

function setup() {
  car1 = createSprite(50,200,50,50);
  car1.shapeColor = "yellow";
  createCanvas(1500,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0);  
  drawSprites();
 
  createEdgeSprites();
  
  car1.velocityX = speed;
  if(wall.x-car1.x<(car1.width + wall.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      wall.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      wall.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      wall.shapeColor=color(0,255,0);
    }
  }
}
 
function hasCollided(lcar1,lwall){
  car1RightEdge=lcar1.x+car1.width;
  wallLeftEdge = lwall.x;
  if(car1RightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
if(hasCollided(car1,wall)){
  car1.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0)
  }
}