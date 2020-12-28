class Pizza
{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:0.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        
        this.radius=radius;
        
        World.add(world,this.body);  
        this.image = loadImage("images/pizza.png");


    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2,this.radius*2);
    pop();
  }
}
