
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof1,bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof();
    bobObject1= new Bob(285,300);
sl1=new Rope(bobObject1.body,{x:285,y:100})
bobObject2= new Bob(325,300);
sl2=new Rope(bobObject2.body,{x:325,y:100})
bobObject3= new Bob(365,300);
sl3=new Rope(bobObject3.body,{x:365,y:100})
bobObject4= new Bob(405,300);
sl4=new Rope(bobObject4.body,{x:405,y:100})
bobObject5= new Bob(445,300);
sl5=new Rope(bobObject5.body,{x:445,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
 bobObject1.display();
  roof1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  sl1.display();
  sl2.display();
  sl3.display();
  sl4.display();
  sl5.display();
}


function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:20,y:-20})
	}
}
