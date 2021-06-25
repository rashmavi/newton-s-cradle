class Rope{
constructor  (body1,body2,pointA,pointB){
this.pointA=pointA
this.pointB=pointB

var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.pointA,y:this.pointB},
length:250
}
this.rope=Constraint.create(options)
World.add(world,this.rope)
}
display(){
var posA= this.rope.bodyA.position
var posB= this.rope.bodyB.position
strokeWeight(4)
line(posA.x,posA.y,posB.x+this.pointA,posB.y+this.pointB)

}

}