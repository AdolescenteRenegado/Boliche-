class Pino {
constructor (x,y) {
this.pino=Bodies.rectangle(x,y,50,100);
this.image=loadImage("PINO.png");
World.add(world,this.pino);
}

display(){
    push();
    translate(this.pino.position.x, this.pino.position.y);
    rotate(this.pino.angle);
    image(this.image,0,0,50,100);
    pop();
}
















}