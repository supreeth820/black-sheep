var Spaceship;
var astroids;


function preload(){

}

function setup(){
    createCanvas(600,600);
    Spaceship =createSprite(500,500,50,100);
    
}

function draw(){
    background("black")
    if(keyDown(RIGHT_ARROW)){
        Spaceship.x =Spaceship.x+3;
    }
    if(keyDown(LEFT_ARROW)){
        Spaceship.x =Spaceship.x-3;
    }
    SpawnAstroids();
  drawSprites()


}

function SpawnAstroids(){
 if(frameCount %110===0){
     var astroids =createSprite(100,0,100,100);
     astroids.x =Math.round(random(20,570));
     astroids.velocityY=3
 }   
}