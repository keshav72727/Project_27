
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Bodies Here.
	
	roof = new Roof(500,200,600,50);

	bobObject1=new BoB(500,600,50);
	bobObject2=new BoB(390,600,50);
	bobObject3=new BoB(610,600,50);
	bobObject4=new BoB(280,600,50);
	bobObject5=new BoB(720,600,50);

	rope1 = new Rope(roof.body,bobObject1.body,-0,400);
	rope2=new Rope(bobObject2.body,roof.body);

	Engine.run(engine);
  
	options={
		bodyA:bobObject1.body,
		bodyB:roof.body,
		stiffness:1,
		length:10
	}
	chain = Constraint.create(options);
	World.add(world,chain);
}


function draw() {
  rectMode(CENTER);
  background(0);

	roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

	
	rope1.display();
	rope2.display();

  drawSprites();
 
}