var sorting='bubble';
var play=false;
var maxheight=-500;

//https://www.random.org/integer-sets/
var Arrbubble=[29, 45, 6, 67, 55, 24, 71, 42, 15, 34, 38, 76, 20, 19, 54, 81, 59, 23, 7, 1, 64, 49, 74, 72, 70, 4, 58, 92, 88, 33, 75, 53, 9, 57, 36, 79, 30, 44, 60, 95, 80, 82, 52, 85, 48, 90, 73, 99, 50, 21, 5, 83, 39, 93, 66, 62, 41, 25, 12, 96, 18, 61, 94, 40, 89, 68, 3, 26, 69, 10, 56, 46, 97, 43, 86, 77, 14, 17, 32, 27, 31, 65, 98, 8, 16, 37, 100, 35, 51, 87, 2, 28, 22, 63, 13, 11, 84, 47, 78, 91];
var BL=Arrbubble.length;
var Arrinsertion=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var IL=Arrinsertion.length;
var Arrquick=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
var QL=Arrquick.length;
var Arrmerge=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ML=Arrmerge.length;
var states=[];

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
        fill('silver');
        for (b=0;b<BL;b++) {
            rect(40+1830/BL*b,0,1830/BL,maxheight/BL*Arrbubble[b]);
        }

        if (play==true) {
            bubblesort();
        }
    }

    else if (sorting=='insertion') {
        clear();
        fill('silver');
        for (n=0;n<IL;n++) {
            rect(40+1830/IL*n,0,1830/IL,maxheight/IL*Arrinsertion[n]);
        }

        if (play==true) {
            insertionsort();
        }
    }

    else if (sorting=='quick') {
        clear();
        for (q=0;q<QL;q++) {
            if (states[q]==0) {fill('red');}
            else if (states[q]==1) {fill('cyan');}
            else {fill('silver')}
            rect(40+1830/QL*q,0,1830/QL,maxheight/QL*Arrquick[q]);
        }
        if (play==true) {
            quicksort(Arrquick,0,QL-1);
            play=false;
        }
    }
    else if (sorting=='merge') {
        clear();
        fill('silver');
        for (m=0;m<ML;m++) {
            rect(40+1830/ML*m,0,1830/ML,maxheight/ML*Arrmerge[m]);
        }
        if (play==true) {
            sort(Arrmerge,0,ML-1);
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
        Arrbubble.forEach((i) => { //https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30?gi=d77de2f3af94
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
        Arrinsertion.forEach((i) => {
            setTimeout(() => { 
                var key=Arrinsertion[i];
                var j=i-1; 
                while (j>=0 && Arrinsertion[j]>key) {    
                    Arrinsertion[j+1]=Arrinsertion[j];
                    j=j-1;
                }
            Arrinsertion[j+1]=key;
            },i*100)
        });
    }
    play=false;
}

async function quicksort(arr, start, end) { //https://www.youtube.com/watch?v=eqo2LxRADhU 
    if (start>=end) {
        return;
    }
    let index = await partition(arr, start, end);
    states[index]= -1;  //states=-1 betekend niks bijzonders 
        await quicksort(arr, start, index-1),
        await quicksort(arr, index+1, end) 
    ;
}

async function partition(arr, start, end) { //quicksort (Lumuto partition scheme)
    for (let i=start;i<end;i++) {
        states[i]=1;
    }
    let pivotValue=arr[end];
    let pivotIndex=start;
    states[pivotIndex]=0; //state=0 betekend dat het getal een pivot is
    for (let i=start;i<end;i++) {
        if (arr[i]<pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex]=-1;
            pivotIndex++;
            states[pivotIndex]=0;
        }
    }
    await swap(arr, pivotIndex, end);
    for (let i=start;i<end;i++) {
        if (i != pivotIndex) {
            states[i]= -1;
        }
    }
    return pivotIndex;
}

async function swap(arr, v, w) { //quick sort
    await sleep(100);
    let temp=arr[v];
    arr[v]=arr[w];
    arr[w]=temp;
}

function sleep(ms) { //delay tussen stappen voor quicksort
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function merge(arr,l,m,r) { //https://www.geeksforgeeks.org/merge-sort/
    let n1=m-1+1;
    let n2=r-m;

    var L= [n1];
    var R= [n2];

    for (let i=0;i<n1;++i) {
        L[i]=arr[l+i];
    }
    for (let j=0;j<n2;++j) {
        R[j]=arr[m+1+j];
    }

    let i=0,j=0;
    let k=l;
    while (i<n1 && j<n2) {
        if (L[i]<=R[j]) {
            arr[k]=L[i];
            i++;
        }
        else {
            arr[k]=R[j];
            j++;
        }
    }

    while (i<n1) {
        arr[k]=L[i];
        i++;
        k++;
    }

    while (j<n2) {
        arr[k]=R[j];
        j++;
        k++;
    }
}

async function sort(arr,l,r) {
    if (l<r) {
        let m = (l+r)/2;
        await sort(arr,l,m);
        await sort(arr,m+1,r);
        await merge(arr,l,m,r);
    }
}


