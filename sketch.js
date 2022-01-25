
var trex ,trex_running;
var ground 
function preload(){
  treximg=loadAnimation("trex1.png", 'trex3.png','trex4.png')
solo=loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,170)
 trex.addAnimation("trex_correndo",treximg)
 trex.scale=0.6
ground=createSprite (600,180)
 ground.addImage(solo)
 soloInvisivel=createSprite(300,190,600,10)
 soloInvisivel.visible=false
}

function draw(){
  background("white")
  //chao infinito
  if(ground.x<0){ 
  ground.x=ground.width/2
  }
 ground.velocityX=-5
 //dinossauro pulando 
 if(keyDown("space")&& trex.y>=110){
   trex.velocityY=-10
 }
 //gravidade
 trex.velocityY=trex.velocityY+0.8
 //nao deixa dino mergulhar no chao 
 trex.collide(soloInvisivel)
  drawSprites()


}
