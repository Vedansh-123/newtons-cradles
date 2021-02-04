
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,rope1,rope2,rope3,rope4,roof;
function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new Ball(150,300)
ball2=new Ball(200,300)
ball3=new Ball(250,300)
ball4=new Ball(300,300)

rope1=new Rope(ball1.body,{x:250,y:50})
rope2=new Rope(ball2.body,{x:250,y:50})
rope3=new Rope(ball3.body,{x:250,y:50})
rope4=new Rope(ball4.body,{x:250,y:50})

roof=new Roof(250,50,150,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()

  roof.display()
  drawSprites();
 
}



