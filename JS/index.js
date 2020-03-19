var sorting='bubble';
var play=false;

var Arrbubble=[80,10,90,50,100,30,60,20,40,70];
var BL=Arrbubble.length;
var Arrinsertion=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,];


function setup() {
  canvas = createCanvas(1900,900);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    translate(0,900);
    if (sorting=='bubble') {

    }
    else if (sorting=='insertion') {

    }
    else if (sorting=='quick') {

    }
    else if (sorting=='merge') {

    }
    else {
        text('an error has occured');
    }
}

function button(choice) {
 sorting = choice;
}

function button_play() {
 
}






