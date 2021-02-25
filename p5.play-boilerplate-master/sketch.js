
//Namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,baboonfacedturkeyhead;


function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;

baboonfacedturkeyhead = Bodies.circle(400,50,80)
World.add (world, baboonfacedturkeyhead)

  
}

function draw() {
  background(0);  
 
Engine . update(engine)

ellipse(baboonfacedturkeyhead.position.x , baboonfacedturkeyhead.
  position.y, 80, 80 )


}