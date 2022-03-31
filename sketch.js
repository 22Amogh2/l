var path,car,fuel,fuel1,ghost,ghost2,ghost3;
var pathImg,carImg,fuelImg,fuel1Img,ghostImg,ghost2Img,ghost3Img;
var fuCollection = 0;
var fuelG,fuel1G,ghostGroup,ghost2Group,ghost2Group;
var emogi,emogiImg;
var gameOverSound ,knifeSwoosh;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  carImg = loadImage("car.png");
  fuelImg = loadImage("fuel.png");
fuel1Img = loadImage("fuel1.png");
ghost2Img = loadImage("ghost2.png");
  ghostImg = loadImage("ghost.png");
  ghost3Img = loadImage("preview(5).png");
  gameOverImage = loadImage("gameover.png")
  
  gameOverSound = loadSound("gameover.mp3")
  
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
// Moving background
path=createSprite(width/2,height,width,2);
path.addImage(pathImg);
path.velocityY = 4;




//creating boy running
car = createSprite(50,height-70,20,50);
car.addImage("carRunning",carImg);
car.scale=0.5;

ghost3Group=new Group();
ghost2Group=new Group();
fuelG=new Group();
fuel1G=new Group();
ghostGroup=new Group();
 fuCollection=0;
}

function draw() {

  if(gameState===PLAY){
  background(0);
  car.x = World.mouseX;
  
if (touches.length>0){
  car.x=car.x+1;
}


  edges= createEdgeSprites();
  car.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  createghost2();
    createghost();
    createfuel1();
    createfuel();

    if (fuel1G.isTouching(car)) {
      fuel1G.destroyEach();
      fuCollection=fuCollection+5;
    }

    if (fuelG.isTouching(car)) {
      fuelG.destroyEach();
      fuCollection=fuCollection+5;
    }
   

  else{
      if(ghostGroup.isTouching(car)||(ghostGroup.isTouching(car))||(ghost3Group.isTouching(car))) {
        gameState=END;
        
        gameOverSound.play()
    
        
         fuelG.destroyEach();
         fuel1G.destroyEach();
         ghostGroup.destroyEach();
         ghost2Group.destroyEach();
         ghost3Group.destroyEach();
  
        
        fuelG.setVelocityYEach(0);
        fuel1G.setVelocityYEach(0);
       
        ghostGroup.setVelocityYEach(0);
        ghost2Group.setVelocityYEach(0);
        ghost3Group.setVelocityYEach(0);
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("fu: "+ fuCollection,10,30);
  }

}

function createfuel() {
  if (World.frameCount % 250 == 0) {
  var fuel = createSprite(Math.round(random(60,height-45,20,30)));
  fuel.addImage(fuelImg);
fuel.scale=0.4;
  fuel.velocityY = 3;
  fuel.lifetime = 250;
  fuelG.add(fuel);
  }
}

function createfuel1() {
  if (World.frameCount % 200 == 0) {
  var fuel1 = createSprite(Math.round(random(1300,height-95,20,30)));
  fuel1.addImage(fuel1Img);
 fuel1.scale=0.2;
  fuel1.velocityY =3;
  fuel1.lifetime = 250;
  fuel1G.add(fuel1);
}
}


function createghost(){
  if (World.frameCount % 100 == 0) {
  var ghost = createSprite(Math.round(random(1200,height-95,20,30)));
  ghost .addImage(ghostImg);
  ghost.scale=0.3;
  ghost.velocityY = 3;
  ghost.lifetime = 250;
  ghostGroup.add(ghost);
  }
}

function createghost2(){
  if (World.frameCount % 150 == 0) {
  var ghost2 = createSprite(Math.round(random(30,height-95,20,30)));
  ghost2 .addImage(ghost2Img);
  ghost2.scale=0.3;
  ghost2.velocityY = 3;
  ghost2.lifetime = 250;
  ghost2Group.add(ghost2);
  }
}


function createghost33(){
  if (World.frameCount % 100 == 0) {
  var ghost3 = createSprite(Math.round(random(300,height-95,20,30)));
  ghost3 .addImage(ghost3Img);
  ghost3.scale=0.3;
  ghost3.velocityY = 3;
  ghost3.lifetime = 250;
  ghost3Group.add(ghost3);
  }
}
