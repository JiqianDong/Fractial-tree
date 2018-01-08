var tree = [];
var len = 100;
var count = 0;
var leaves = [];
var fall = false;
function setup() {
  // put setup code here
  createCanvas(400,400);
  slider = createSlider(PI/8,PI/3,PI/4,0.01);
  button = createButton('add branches');
  button.position(width/2, height+10);
  button.mousePressed(adddd);
  falling = createButton('leaves falling');
  falling.position(width/2, height+50);
  falling.mousePressed(fa);

  var root = new Branch(createVector(width/2,height),createVector(width/2,height-len));
  tree.push(root);
    
}

function draw() {
  // put drawing code here
    background(50);
    for (var i = 0; i < tree.length; i++) {
  		tree[i].show();
    } 
	for (var i = 0; i < leaves.length; i++) {
		leaves[i].show();
	} 
	if (fall===true){
		for (var i = 0; i < leaves.length; i++) {
			leaves[i].falling();
			
		}
	}
}
function adddd(){
	if (count<=5){
		for (var i = tree.length - 1; i >= 0; i--) {
			if (tree[i].finish === false){
				angle = slider.value();
				var newbranches = tree[i].createBranch(angle);
				// console.log( newbranches);
				tree.push.apply(tree,newbranches);
				
			}			
	    }
	    count++;
	}
	else {
		for (var i = tree.length - 1; i >= 0; i--) {
			if (tree[i].finish === false){
				var newLeaf = tree[i].createLeaves();
				leaves.push(newLeaf);
			}
		}
	}	
}

function fa(){
	fall = true;
}
