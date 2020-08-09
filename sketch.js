
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob (390,200,30,30);
bobObject2 = new Bob (420,200,30,30);
bobObject3 = new Bob (450,200,30,30);
bobObject4 = new Bob (480,200,30,30);
bobObject5 = new Bob (510,200,30,30);





roofObject = new Roof(450,100,400,20);

rope1 = new Rope(roofObject.body,bobObject1.body,bobDiameter*100,0);
rope2 = new Rope(roofObject.body,bobObject2.body,bobDiameter*100,0);
rope3 = new Rope(roofObject.body,bobObject3.body,bobDiameter*100,0);
rope4 = new Rope(roofObject.body,bobObject4.body,bobDiameter*100,0);
rope5 = new Rope(roofObject.body,bobObject5.body,bobDiameter*100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();




  roofObject.display();
  keyPressed();
  keyPressed2();
  drawSprites();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-10,y:-5});



	}
}

function keyPressed2(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:10,y:-5});
		
		
}
}



