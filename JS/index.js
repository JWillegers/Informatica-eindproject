var sorting;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw_bubble() {
  noStroke();
  fill('steelblue');
  ellipse(0,0,800);
  fill('deepskyblue');
  ellipse(450,450,400); 
}

function button(choice) {
 sorting = choice;
}

function button_play() {
 alert(sorting); //debuggin button
}

if (sorting=='bubble') {
 draw_bubble();
}




