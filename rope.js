class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y: this.offsetY},
            //stiffness: 0.04,
            //length: height/2
        }
       /* this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.rope1 = loadImage('sprites/sling3.png');*/
        this.bodyA = bodyA
        this.bodyB = bodyB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

   
    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            var a1x = pointA.x;
            var a1y = pointA.y;
            var a2x = pointB.x+this.offsetX;
            var a2y = pointB.y+this.offsetY;
            //var pointBy= this.offsetY;
            push ();
            //fill("grey");
            stroke("blue");
            strokeWeight (3);
            line (a1x, a1y, a2x, a2y);
             pop ();
            
        }
    
}