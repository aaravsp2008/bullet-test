//var
var car2,car1,car3;
var wall1,wall2,wall3;
var speed,weight;

//setup
function setup() {
  createCanvas(1600,400);

  //giving random value to speed and weight
   speed = random(50,90);
   weight = random(400,1500);

  // creating cars
   car1 = createSprite(50,200,50,50);



  // creating walls
   wall1 = createSprite(1500,200,60,height/2);

   
  //velocity of cars
   car1.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
     car1.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22509;
     if(deformation>180){
     car1.shapeColor = color(255,0,0);
     }
  }
  
  car1.display();
  wall1.display();
  drawSprites();
}