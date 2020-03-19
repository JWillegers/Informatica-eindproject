var sorting='bubble';
var play=false;

var Arrbubble=[80,10,90,50,100,30,60,20,40,70];
var BL=Arrbubble.length;
var Arrinsertion=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var IL=Arrinsertion.length;
var Arrquick=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var QL=Arrquick.length;
var Arrmerge=[1,2,3,4,5,6,7,8,9,10];
var ML=Arrmerge.length;

function setup() {
  canvas = createCanvas(1900,900);
  background('white');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    translate(0,900);
    if (sorting=='bubble') {
        clear();
        fill('red');
        for (b=1;b<BL;b++) {
            rect(10+20*b,0,20,-1*Arrbubble[b]);
        }

        if (play==true) {
            for (i=0; i<BL-1;i++) {
                swapped=false;
		        for (j=0;j<BL-1;j++) {
			        if (Arrbubble[j] > Arrbubble[j + 1]) {
				        // swap
				        let t = Arrbubble[j];
				        Arrbubble[j] = Arrbubble[j + 1];
                        Arrbubble[j + 1] = t;
                        swapped=true;
			        }
                }
                if (swapped==false) {
                    break;
                }
	        }
        }
    }
    else if (sorting=='insertion') {
        clear();
    }
    else if (sorting=='quick') {
        clear();
    }
    else if (sorting=='merge') {
        clear();
    }
    else {
        text('an error has occured');
    }
}

function button(choice) {
 play=false;
 sorting = choice;
 Arrbubble.sort(function(a, b){return 0.5 - Math.random()});
 Arrinsertion.sort(function(a, b){return 0.5 - Math.random()});
 Arrquick.sort(function(a, b){return 0.5 - Math.random()});
 Arrmerge.sort(function(a, b){return 0.5 - Math.random()});
 //bron: w3schools -> JS array sort -> sorting an array in random order
}

function button_play() {
    play=true;
    }






