
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var ball;
var pino;
var ballimg;
var pino2;
var pino3;
var pino4;
var pino5;
var pino6;
var sound;

function preload(){
ballimg=loadImage("bola.png");
sound=loadSound("sound.mp3");







}



function setup() {
  createCanvas(1200,600);
  imageMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  chao = Bodies.rectangle(600,590,1200,20,{isStatic:true});
  pino= new Pino(850,550);
  pino2= new Pino(900,550);
  pino3= new Pino(875,400);
  pino4= new Pino(925,400);
  pino5= new Pino(950,550);
  pino6= new Pino(900,250);
  rectMode(CENTER);
  
  World.add(world,chao);
  ball = Bodies.circle(300,250,30);
  World.add(world,ball);
}


function draw() {
  background(51);
  Engine.update(engine);
  fill("purple");
  rect(chao.position.x, chao.position.y, 1200,20);
  fill("blue");

  push();
  translate(ball.position.x, ball.position.y);
  rotate(ball.angle)
  imageMode(CENTER);
  image(ballimg,0,0,60,60);
  pop();
  pino.display();
  pino2.display();
  pino3.display();
  pino4.display();
  pino5.display();
  pino6.display();
  collide(ball,pino.pino);
  collide(ball,pino5.pino);
  collide(ball,pino6.pino);

}



function keyPressed(){
if (keyCode===RIGHT_ARROW){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.1,y:0})
}


if (keyCode===LEFT_ARROW){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:-0.1,y:0})
}


if (keyCode===UP_ARROW){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:-0.1})
}



}

function collide(a,b){
  var distance=dist(a.position.x,a.position.y,b.position.x,b.position.y)
  if(distance<=70){
    sound.play();
  }
}
