const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var roof;
var ball_options;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

ball_options={
restitution:1,
density:0.8,

}


	ball = Bodies.circle(320,400,20,ball_options);
	World.add(world,ball);
  
	ball2= Bodies.circle(360,400,20,ball_options);
	World.add(world,ball2);
  
	ball3 = Bodies.circle(400,400,20,ball_options);
	World.add(world,ball3);
  
	ball4= Bodies.circle(440,400,20,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(480,400,20,ball_options);
	World.add(world,ball5);
  


	

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  rope1=new Rope(ball,roof,-80,0)
  rope2=new Rope(ball2,roof,-40,0)
  rope3=new Rope(ball3,roof,0,0)
  rope4=new Rope(ball4,roof,40,0)
  rope5=new Rope(ball5,roof,80,0)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");



Engine.update(engine);
  
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,40,40);
  ellipse(ball2.position.x,ball2.position.y,40,40);
  ellipse(ball3.position.x,ball3.position.y,40,40);
  ellipse(ball4.position.x,ball4.position.y,40,40);
  ellipse(ball5.position.x,ball5.position.y,40,40);
  
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:-30,y:-30})
	}
}
