class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY},
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke("white");
        strokeWeight(2);

        var anchorAX = pointA.x
        var anchorAY = pointA.y

        var anchorBX = pointB.x + this.offsetX;
        var anchorBY = pointB.y + this.offsetY;

        line(anchorAX, anchorAY, anchorBX, anchorBY);
    }
}