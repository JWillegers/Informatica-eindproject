var bubble=true;
var insertion=false;
var quick=false;
var merge=false;
var play=false;



function bubblesortbutton() {
    if (play==false) {
        bubble=true;
        insertion=false;
        quick=false;
        merge=false;
    }
}

function insertionsortbutton() {
    if (play==false) {
        bubble=false;
        insertion=true;
        quick=false;
        merge=false;
    }
}


function quicksortbutton() {
    if (play==false) {
        bubble=false;
        insertion=false;
        quick=true;
        merge=false;
    }
}


function mergesortbutton() {
    if (play==false) {
        bubble=false;
        insertion=false;
        quick=false;
        merge=true;
    }
}


function playbutton() {

}

if (bubble==true) {
function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('steelblue');
  ellipse(0,0,800);
  fill('deepskyblue');
  ellipse(450,450,400); }
}




