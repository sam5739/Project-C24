const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var computerArc, playerArc;

var arrow, arrow2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 65, 180);
 
  //Create Player Archer Object
 playerArc  = new PlayerArcher(370,player.body.position.y-30,65,150);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArc = new ComputerArcher(1000,computer.body.position.y-30,65,180);

  //Create an arrow Object
 arrow = new PlayerArrow(playerArc.body.position.x+50,playerArc.body.position.y,50, 25);
 arrow2 = new ComputerArrow(computerArc.body.position.x-50,computerArc.body.position.y,50, 25); 

}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArc.display();
  computerArc.display();

  //Display arrow();
  arrow.display();
  arrow2.display();

  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArc.body.angle);
  }
}