var migrant;
var obstacle1, obstacle2, obstacle3;
var ground, groundImg;
var backgroundImg, obstacle1Img, obstacle2Img, obstacle3Img;
var migrantImg;
var obstacleGroup;
var score;


function preload(){
 
 backgroundImg = loadImage("Morning Landscape.jpg");
groundImg = loadImage("ground2.png");
  migrantImg= loadImage("migrant.png");
  obstacle1Img = loadImage("snakeObstacle.jpeg");
  obstacle2Img = loadImage("stoneObstacle.png");
  obstacle3Img = loadImage("grenadeObstacle.jpg");
  
}

function setup() {
  createCanvas(2000, 1000);
  
  migrant = createSprite(displayWidth/-100,displayHeight-100);
  migrant.addImage(migrantImg);
  migrant.scale = 0.5;
  
  ground = createSprite(displayWidth-100,displayHeight-300,displayWidth,displayHeight);
  ground.addImage("ground", groundImg);
  //ground.x = ground.displayWidth /2;
  ground.velocityX = -4;
  
  //invisibleGround = createSprite(displayWidth-200,displayHeight-250,displayWidth-200,10,displayHeight-130);
  //invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
    text (mouseX+","+ mouseY, mouseX, mouseY);

  background(rgb(153, 232, 255));
  
  //score = score + Math.round(getFrameRate()/60);
  //text("Score: "+ score, 500,50);
  
  if(keyDown("space")) {
    migrant.velocityY = -10;
  }
  
  migrant.velocityY = migrant.velocityY + 0.8
  console.log(ground.x);
  if (ground.x < displayWidth/2){
    ground.x = ground.displayWidth/2;
  }
  
  //trex.collide(invisibleGround);
  spawnObstacles();
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(displayWidth-100,displayHeight-190);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.6;
    obstacle.lifetime = displayWidth-100;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}