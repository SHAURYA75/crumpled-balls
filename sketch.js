
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	function setup() {
		createCanvas(400,400);
	  
		engine = Engine.create();
		world = engine.world;
		
		 var ball_options = {
		  restitution: 0.95,
		  frictionAir:0.01
		}
		 
		 var ground_options ={
		   isStatic: true
		 };
		
	  
		ground = Bodies.rectangle(200,390,400,20,ground_options);
		World.add(world,ground);
	  
		ball = Bodies.circle(100,10,20,ball_options);
		World.add(world,ball);
		
		
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


}
