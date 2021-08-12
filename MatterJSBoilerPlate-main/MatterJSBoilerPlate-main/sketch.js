
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bottom_wall;
var top_wall;
var left_wall;
var right_wall;
var trash1, trash2;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  bottom_wall = new Ground(400, 390, 800, 20);
  top_wall = new Ground(400, 10, 800, 20);
  left_wall = new Ground(10, 200, 20, 400);
  right_wall = new Ground(790, 200, 20, 400);
  trash1 = new Ground(450, 350, 10, 100)
  trash2 = new Ground(600, 350, 10, 100)


  var ball_options ={
    restitution: 0.5,
    friction: 0,
    density: 1.2
  }
  ball = Matter.Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);


  
}

function draw() 
{

  background(51);

  Engine.update(engine);

  bottom_wall.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();
  trash1.show();
  trash2.show();

 

  ellipseMode(RADIUS);

 ellipse(ball.position.x, ball.position.y, 20, 20,);
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0})
    }
}



