
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(400,250,230,20);

	bobObject1 = new Bob(320,575,40);
	bobObject2 = new Bob(360,575,40);
	bobObject3 = new Bob(400,575,40);
	bobObject4 = new Bob(440,575,40);
	bobObject5 = new Bob(480,575,40);

	
	
	rope1 = new Rope(bobObject1.body,roofObject.body,-80, 0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-40, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,40,0);
    rope5 = new Rope(bobObject5.body,roofObject.body,80,0);
	
	
	Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background(230);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  
}

function keyPressed () {

	if (keyCode === UP_ARROW) {

		   Matter.Body.applyForce(bobObject1.body , bobObject1.body.position , {x: -50 , y: -45});
	}

}






