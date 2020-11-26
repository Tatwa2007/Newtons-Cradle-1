
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, rope1;

function preload(){
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(width/2, height-height+20,width,20);

	ball1 = new Ball(height-height/10, height-50,height/6);
	ball2 = new Ball(height-3*height/10, height-50,height/6);
	ball3 = new Ball(height-5*height/10, height-50,height/6);

   rope1 = new Rope (ball1.body,ground.body, ball1.radius, 0);
   rope2 = new Rope (ball2.body,ground.body, 0, 0);
   rope3 = new Rope (ball3.body,ground.body, -ball3.radius, 0);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  ball1.display();
  ball2.display();
  ball3.display();

  rope1.display();
  rope2.display();
  rope3.display();

  drawSprites();

}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball3.body, ball3.body.position, {x:-50, y:0});
	}
}




