var  ball,wall1,wall2,pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10,ob1,ob2,line1;
var bowling;
var lanes;
var pin;
var score=0;
var chances=3;
var gameState="play"
var pins;
var reset;
var obst;
function preload() {
  lanes = loadImage("assets/lane.png")
  bowling = loadImage("assets/bowling.png")
  pin = loadImage("assets/pin.png")
  obst = loadImage("assets/b.png")
}

function setup() {
 createCanvas(600,750)

 line1 = createSprite(300,3,380,5)
 
ball = createSprite(300,680,20,20)
ball.addImage(bowling)
ball.scale = 0.2


wall1 = createSprite(120,375,20,750)
wall2 = createSprite(480,375,20,750)

pin1 = createSprite(240,30,30,30)
pin1.addImage(pin)
pin1.scale = 0.150

pin2 = createSprite(279,30,30,30)
pin2.addImage(pin)
pin2.scale = 0.150

pin3 = createSprite(320,30,30,30)
pin3.addImage(pin)
pin3.scale = 0.150

pin4 = createSprite(360,30,30,30)
pin4.addImage(pin)
pin4.scale = 0.150

pin5 = createSprite(337,65,30,30)
pin5.addImage(pin)
pin5.scale = 0.150

pin6 = createSprite(298,65,30,30)
pin6.addImage(pin)
pin6.scale = 0.150

pin7 = createSprite(260,65,30,30)
pin7.addImage(pin)
pin7.scale = 0.150

pin8 = createSprite(282,100,30,30)
pin8.addImage(pin)
pin8.scale = 0.150

pin9 = createSprite(320,100,30,30)
pin9.addImage(pin)
pin9.scale = 0.150

pin10 = createSprite(300,135,30,30)
pin10.addImage(pin)
pin10.scale = 0.150

ob1 = createSprite(145,490,20,20)
ob1.scale=0.4
ob1.addImage(obst)
ob2 = createSprite(455,350,20,20)
ob2.scale=0.4
ob2.addImage(obst)
 

ob1.velocityX = +2;
ob2.velocityX = -2;



}
function draw() {
  background(0);
  image(lanes,-250,-240,1100,1130)
  textSize(23)
  text('Score: '+score,15,70)
  if(gameState!=="end"){
    textSize(22)
    text("chances: "+chances,490,70)
    
    
  }
  if(gameState==="play"){
    fill("red")
    text("press A to reset the ball",180,350)
    fill("black")
    text("PRESS SPACE TO START",160,300)
    textSize(40)
    text("BOWLING STAR",160,200)
    
  }
  ob1.bounceOff(wall1)
 ob1.bounceOff(wall2)
 ob2.bounceOff(wall1)
 ob2.bounceOff(wall2)

  if(ball.isTouching(ob1)){
    ball.velocityY-=4
    ob1.remove()
  }
  if(ball.isTouching(ob2)){
    ball.velocityY-=4
    ob2.remove()
  }

 // pin10.bounceOff(ball)
 pin9.bounceOff(ball)
 pin8.bounceOff(ball)
 pin7.bounceOff(ball)
 pin6.bounceOff(ball)
 pin5.bounceOff(ball)
 pin4.bounceOff(ball)
 pin3.bounceOff(ball)
 pin2.bounceOff(ball)
 pin1.bounceOff(ball)

 pin10.bounce(pin9)
 pin10.bounce(pin8)
 pin10.bounce(pin7)
 pin10.bounce(pin5)
 pin10.bounce(pin6)
 pin10.bounce(pin4)
 pin10.bounce(pin3)
 pin10.bounce(pin2)
 pin10.bounce(pin1)
 
 pin9.bounce(pin8)
 pin9.bounce(pin7)
 pin9.bounce(pin5)
 pin9.bounce(pin6)
 pin9.bounce(pin4)
 pin9.bounce(pin3)
 pin9.bounce(pin2)
 pin9.bounce(pin1)

 pin8.bounce(pin7)
 pin8.bounce(pin5)
 pin8.bounce(pin6)
 pin8.bounce(pin4)
 pin8.bounce(pin3)
 pin8.bounce(pin2)
 pin8.bounce(pin1)

 pin7.bounce(pin5)
 pin7.bounce(pin6)
 pin7.bounce(pin4)
 pin7.bounce(pin3)
 pin7.bounce(pin2)
 pin7.bounce(pin1)
  
 pin6.bounce(pin5)
 pin6.bounce(pin4)
 pin6.bounce(pin3)
 pin6.bounce(pin2)
 pin6.bounce(pin1)

 pin5.bounce(pin4)
 pin5.bounce(pin3)
 pin5.bounce(pin2)
 pin5.bounce(pin1)

 pin4.bounce(pin3)
 pin4.bounce(pin2)
 pin4.bounce(pin1)

 pin3.bounce(pin2)
 pin3.bounce(pin1)

 pin2.bounce(pin1)

 ball.bounceOff(wall1)
 ball.bounceOff(wall2)

 pins=[pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10];

  for(var i = 0;i<pins.length;i++){
    if(line1.isTouching(pins[i])){
      pins[i].remove()
      score+=10
    }
  }
 


 
  fill("white")
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  drawSprites();
   
  if(keyDown("space")&&gameState==="play"){
    ball.velocityY = random(-10,-1)
    chances-=1
    gameState='on'
  }
  if(keyDown("A")){
    gameState="play"
    ball.x=300
    ball.y=680
    ball.velocityY=0
    ball.velocityX=0

  
  
  }
  if(chances===0&&keyDown("a")){
    gameState="end"
  }
  if(gameState==="end"){
    ball.velocityX=0
    ball.velocityY=0
    ob1.velocityX=0
    ob2.velocityX=0
    textSize(25)
    text("GAME OVER YOUR CHANCES ARE OVER",60,500)
    textSize(40)
    text("score is "+score,200,550)
  }
  if(ball.bounceOff(pin10)){
    ball.velocityY-=0.08
    ball.velocityX=random(-10,10)
    pin10.velocityY = random(-7,-2)
    
  }
  
}


