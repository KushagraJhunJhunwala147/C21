const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  buttonone=createImg('right.png')
  buttonone.position(220,30)
  buttonone.size(50,50)
  buttonone.mouseClicked(hForce)
  buttonone=createImg('up.png')
  buttonone.position(20,30)
  buttonone.size(50,50)
  buttonone.mouseClicked(vForce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  options={
    restitution:.95
  }
  ball=Bodies.circle(200,100,20,options)
  World.add(world,ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  
}
function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05})
  
}
