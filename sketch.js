
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var ball;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//box1 = new Box(1000, 385, 200, 20);
	//box2 = new Box(915, 350, 20, 100);
	//box3 = new Box(1085, 350, 20, 100);
	box1 = new Box(1000, 385, 200, 20);
	box2 = new Box(890, 350, 20, 100);
	box3 = new Box(1110, 350, 20, 100);

	ground = new Ground(800, 690, 1600, 25);

	ball = new Ball(100, 350, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.show();
  ball.dishow();
  
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});
	}


}



