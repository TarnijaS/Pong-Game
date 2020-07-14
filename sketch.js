//Pong Game

var ball,imgPaddle;
var paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleAnimation = loadAnimation ("paddle.png");
  ballAnimation = loadAnimation ("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  paddle = createSprite(350,200,10,70);
  paddle.addAnimation("paddle1",paddleAnimation);
  
  ball = createSprite(50,200,20,20);
  ball.addAnimation("ball1",ballAnimation);
  ball.velocityX = 9;
  ball.velocityY = 2;
  
  /* give the ball an initial velocity of 9 in the X direction */
  }

function draw() {
  background(205,153,0);

  /* create Edge Sprites here */
   edge = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
   
    /* ball.bounceOff(edge[0]);
     ball.bounceOff(paddle);
     ball.bounceOff(edge[2]);
     ball.bounceOff(edge[3]); */
  
     ball.bounceOff(edge[0]); 
     ball.bounceOff(edge[2]);
     ball.bounceOff(edge[3]); 
  
      paddle.bounceOff(edge[0]); 
     paddle.bounceOff(edge[2]);
     paddle.bounceOff(edge[3]); 
     

  
  
  /* Allow the ball to bounceoff from the paddle */
  
   ball.bounceOff(paddle);

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the DOWN Arrow Key */
    paddle.y = paddle.y + 20
  }
  //randomVelocity();
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  if (ball.isTouching(paddle)){ 
    var rand = randomNumber(-10,100);
    /* assign the ball a random vertical velocity, so it bounces off in random direction */
   ball.velocityY = rand
  
}
}

