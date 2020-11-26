class Ball{
    constructor(x, y, radius, angle) {
        var options = {
          isStatic:false, 
          restitution:1,
            'frictionAir':0.005,
            'density':1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.image = loadImage("wood1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill ("blue");
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}