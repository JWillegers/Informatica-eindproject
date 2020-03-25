var sorting='bubble';
var play=false;
var maxheight=-500;

//https://www.random.org/integer-sets/?sets=1&num=100&min=1&max=100&seqnos=on&commas=on&order=index&format=html&rnd=new
var Arrbubble=[29, 45, 6, 67, 55, 24, 71, 42, 15, 34, 38, 76, 20, 19, 54, 81, 59, 23, 7, 1, 64, 49, 74, 72, 70, 4, 58, 88, 33, 75, 53, 9, 57, 36, 79, 30, 44, 60, 80, 82, 52, 85, 48, 90, 73, 50, 21, 5, 83, 39, 66, 62, 41, 25, 12, 18, 61, 40, 89, 68, 3, 26, 69, 10, 56, 46, 43, 86, 77, 14, 17, 32, 27, 31, 65, 8, 16, 37, 35, 51, 87, 2, 28, 22, 63, 13, 11, 84, 47, 78, 91];
var BL=Arrbubble.length;
var Arrinsertion=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var IL=Arrinsertion.length;
var Arrquick=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var QL=Arrquick.length;
var Arrmerge=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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
        for (b=0;b<BL;b++) {
            rect(40+1830/BL*b,0,1830/BL,maxheight/BL*Arrbubble[b]);
        }

        if (play==true) {
            bubblesort();
        }
    }

    else if (sorting=='insertion') {
        clear();
        fill('gray');
        for (n=0;n<IL;n++) {
            rect(40+1830/IL*n,0,1830/IL,maxheight/IL*Arrinsertion[n]);
        }

        if (play==true) {
            insertionsort();
        }
    }

    else if (sorting=='quick') {
        clear();
        fill('cyan');
        for (q=0;q<QL;q++) {
            rect(40+1830/QL*q,0,1830/QL,maxheight/QL*Arrquick[q]);
        }
        if (play==true) {
            quicksort();
        }
    }
    else if (sorting=='merge') {
        clear();
        fill('silver');
        for (m=0;m<ML;m++) {
            rect(40+1830/ML*m,0,1830/ML,maxheight/ML*Arrmerge[m]);
        }
        if (play==true) {
            mergesort();
        }
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

function bubblesort() { //https://www.geeksforgeeks.org/bubble-sort/
    for (i=0; i<BL-1;i++) {
        swapped=false;
        Arrbubble.forEach((i) => {
            setTimeout(()=> {
                for (j=0;j<BL-1;j++) {
			    if (Arrbubble[j] > Arrbubble[j + 1]) {
				    // swap
				    let t = Arrbubble[j];
				    Arrbubble[j] = Arrbubble[j + 1];
                    Arrbubble[j + 1] = t;
                    swapped=true;
			    }
            }
            },i*100)
        });
        if (swapped==false) {
            
            break;
        }
    }
    play=false;
}

function insertionsort() { //https://www.geeksforgeeks.org/insertion-sort/
    for(i=0;i<IL;++i) {
        var key=Arrinsertion[i];
        var j=i-1;
        while (j>=0 && Arrinsertion[j]>key) {
            Arrinsertion[j+1]=Arrinsertion[j];
            j=j-1;
        }
        Arrinsertion[j+1]=key;
    }
    play=false;
}

function quicksort() {

}

function mergesort() { //https://www.geeksforgeeks.org/merge-sort/

}


