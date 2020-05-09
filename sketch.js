const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var fish;
var bgImg;
var fishImg,fish2Img;
//var ground;


function preload(){
bgImg=loadImage("image/oceanbg.jpg");
fishImg = loadImage("image/yellowfish.gif");
fish2Img = loadImage("image/fish.jpg");

}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

   // ground = Bodies.rectangle(200,390,200,20,ground_options);
   // World.add(world,ground);

  //  console.log(ground);
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    spawnFish();
    spawnFish2();


  //rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);
   drawSprites();
}
function spawnFish(){
    if(frameCount%60===0){
    var fish = createSprite(400,random(0,400),20,20);
    fish.addImage(fishImg);
    fish.scale =0.1;
    fish.velocityX = -5;
    fish.lifetime = 80;
    }
}
function spawnFish2(){
    if(frameCount%40===0){
        var fish2 = createSprite(400,random(0,400),20,20);
        fish2.addImage(fish2Img);
        fish2.scale =0.2;
        fish2.velocityX = -5;
        fish2.lifetime =80;
    }
}