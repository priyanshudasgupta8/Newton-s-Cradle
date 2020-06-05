/*var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	 
	bobObject1 = new Bob(360,460,20);
	bobObject2 = new Bob(380,460,20);
	bobObject3 = new Bob(400,460,20);
	bobObject4 = new Bob(420,460,20);
	bobObject5 = new Bob(440,460,20);

	roof = new Roof(400,240,250,20);

	rope1 = new Rope(bobObject1.body,roof.body,-80,0,false);
	rope2 = new Rope(bobObject2.body,roof.body,-40,0,true);
	rope3 = new Rope(bobObject3.body,roof.body,0,0,true);
	rope4 = new Rope(bobObject4.body,roof.body,40,0,true);
	rope5 = new Rope(bobObject5.body,roof.body,80,0,false);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

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

	roof.display();
  
  //drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Body.applyForce(bobObject1.body,bobObject1.position,{x:-100,y:10});
	}
}


