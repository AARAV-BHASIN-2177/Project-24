const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;
var engine;
var world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200,3);
	ground=new Ground(600,height,1200,20);
	dustbin1=new Dustbin(350,250,150,PI/7);
	dustbin2=new Dustbin(450,450,150,PI/7);
	dustbin3=new Dustbin(550,550,150,PI/2);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}



