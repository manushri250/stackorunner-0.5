var player,  stack,  coin,  rb,  gb,  zombie, obstacle, bg ;
var playerImg, stackImg, coinImg, rbImg, gbImg, zombieImg,obstacleImg, bgImg;

function preload(){
 playerImg = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png", "images/boy6.png", "images/boy7.png","images/boy8.png");
 coinImg = loadAnimation("images/coin1.png", "images/coin2.png", "images/coin3.png", "images/coin4.png", "images/coin5.png","images/coin6.png", "images/coin7.png", "images/coin8.png", "images/coin9.png", "images/coin10.png");
 
 stackImg = loadImage("images/bstone.png");
 rbImg = loadImage("images/red booster.png");
 gbImg = loadImage("images/green booster.png");
 zombieImg = loadImage("images/zombie.png");
 obstacleImg = loadImage("images/obstacle.png");
 bgImg = loadImage("images/bg.jpeg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  
  bg = createSprite(displayWidth/2, displayHeight/2, displayWidth+500, displayHeight);
  bg.addImage("bg", bgImg);
  bg.velocity.y = 3;
  

  player = createSprite(displayWidth/2, displayHeight/2, 50, 50);
  player.addAnimation("plr", playerImg);

  stack = createSprite(displayWidth/2, displayHeight-225, 50, 50);
  stack.addImage("stk", stackImg);
  stack.scale = 0.4;

  

}

function draw() {
  background(255,255,255);  

  if (bg.y > displayHeight-300){
    bg.y = displayHeight/2;
  }

  drawSprites();
}