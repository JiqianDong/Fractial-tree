function Branch(begin,end){
	this.begin = begin;
	this.end = end;
	this.vector = p5.Vector.sub(end,begin);
	this.show = function(){
		stroke(255);
		line(this.begin.x,this.begin.y,this.end.x,this.end.y);
	}
	this.finish = false;
	this.createBranch = function(angle){
		this.vector.rotate(angle);
		this.vector.mult(0.66);
		var left = new Branch(this.end,p5.Vector.add(this.end,this.vector));
		this.vector.rotate(-angle*2);
		var right = new Branch(this.end,p5.Vector.add(this.end,this.vector));
		this.finish = true;
		return [left,right];

	}
	this.createLeaves = function(){
		var leaf = new Leaf(this.end.x,this.end.y);	
		this.finish = true;
		return leaf;	

	}

}

var Leaf = function(x,y){
	this.x = x;
	this.y = y;
	this.show = function(){
		fill(255,0,70,100);
		noStroke();
		ellipse(this.x,this.y,8,8);
	}
	this.falling = function(){
		this.y+=5;
	}
	
}
