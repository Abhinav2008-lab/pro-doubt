const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];
var maxSnow = 100;

var backgroundImg;
var bear, bearRunning;
var snow;
var ground;

function preload(){
  backgroundImg = loadImage("snow2.jpg");

  bearRunning = loadAnimation("sprites/bear1.png","sprites/bear2.png","sprites/bear3.png","sprites/bear4.png","sprites/bear5.png","sprites/bear6.png","sprites/bear7.png","sprites/bear8.png","sprites/bear9.png","sprites/bear10.png","sprites/bear11.png","sprites/bear12.png","sprites/bear13.png","sprites/bear14.png","sprites/bear15.png","sprites/bear16.png","sprites/bear17.png","sprites/bear18.png");

}

function setup() {
  createCanvas(1300,600);

  //engine = Engine.create();
  //world = engine.world;

  ground = createSprite(650,600,2600,50);
  ground.velocityX = -10;

  bear = createSprite(100);
  bear.addAnimation("runner",bearRunning);
  bear.velocityX = 3;
  bear.setCollider("rectangle",15,-2,50,20);
  
}

function draw() {
  background(backgroundImg);
  
  bear.collide(ground);

  if(ground.x < 530){
    ground.x = 600;
  }

  if(bear.x > 1200){
    bear.x = 100;
  }

  if(keyWentDown("space") && bear.y>550){
    bear.velocityY = -15
  }

    bear.velocityY = bear.velocityY + 0.8
    
    drawSprites();
}
