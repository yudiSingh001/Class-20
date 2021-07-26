var fixedRect,movingRect,ball;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(200, 200, 70, 100);
  ball = createSprite(100, 200, 15, 15);
  ball.velocityX = 3;

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 
  && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 
  && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 ){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }

 if(ball.x - fixedRect.x <= fixedRect.width/2 + ball.width/2 
  && fixedRect.x - ball.x <= fixedRect.width/2 + ball.width/2 ){
    ball.velocityX = ball.velocityX * (-1);
  }

  if(ball.y - fixedRect.y <= fixedRect.height/2 + ball.height/2 
    && fixedRect.y - ball.y <= fixedRect.height/2 + ball.height/2 ){
      ball.velocityY = ball.velocityY * (-1);
    }

  drawSprites();
}