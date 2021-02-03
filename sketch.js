  var bullet,wall;
  var speed,weight,thickness;
  
  
  function setup() {
    createCanvas(1600,400)

    speed=random(55,90);
    weight=random(400,1500)
    thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80)
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = color(255)
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  drawSprites();

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2)
  {
 bullet.velocityX=0;
var damage = 0.5*speed*weight*speed/22509;
    if(damage<10)
{
wall.shapeColor = color("green")
}


if(damage>10)
{

  wall.shapeColor = color("red")
}
  }
}