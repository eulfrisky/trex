var trex, trex_running, edges;
var groundImage;
var eu

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  eu = createSprite (200,210,600,30)
  eu.addImage("estounervosa",groundImage)
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  eu.velocityX = -3
  //registrando a posição y do trex
  if (eu.x<0){
    eu.x = eu.width/2
  }
  
  //pular quando tecla de espaço for pressionada
 
  if(keyDown("space")&& trex.y>169){
    trex.velocityY = -10;
  }

  
  trex.velocityY = trex.velocityY + 0.5;
  
 //impedir que o trex caia
  trex.collide(edges[3])
  trex.collide (eu)
  drawSprites();
}