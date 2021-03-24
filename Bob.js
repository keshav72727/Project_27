class BoB {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.radius = radius
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(400.311,210);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}