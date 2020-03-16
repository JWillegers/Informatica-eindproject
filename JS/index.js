var bubble="true";
var insertion=false;
var quick=false;
var merge=false;
var play=false;

function bubblesort() {
    if (play===false) {
        bubble=true;
        insertion=false;
        quick=false;
        merge=false;
    }
}

function insertionsort() {
    if (play===false) {
        bubble=false;
        insertion=true;
        quick=false;
        merge=false;
    }
}


function quicksort() {
    if (play===false) {
        bubble=false;
        insertion=false;
        quick=true;
        merge=false;
    }
}


function mergesort() {
    if (play===false) {
        bubble=false;
        insertion=false;
        quick=false;
        merge=true;
    }
}


function play() {

}

if (bubble=="true") {
    text('test');
}

else {
    return play;
}