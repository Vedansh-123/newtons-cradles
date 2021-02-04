class Ball{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius=30
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, 30,30);
        pop();
      }
}