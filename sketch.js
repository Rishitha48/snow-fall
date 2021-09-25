const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var snowfall=[];
var maxdrops=100;

function preload(){
snowImg=loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  if(frameCount%80==0){
for (var i=0;i<maxdrops;i++){
  snowfall.push(new Snow(random(0,800),10))
}
}
  
}

function draw() {
  background(snowImg); 
  Engine.update(engine);
  for(var i=0;i<maxdrops;i+=50){
    snowfall[i].display();
snowfall[i].update();

  } 
  drawSprites();
}