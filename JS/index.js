var sorting='bubble';
var play=false;
var SH=screen.height*0.772; //screen heigh
var SW=screen.width*0.995;      //screen width
var AW=SW-0.05*SW;        //totale width balkjes
var MW=SW*0.02;           //width tussen balkjes en zijkant schrem (marge width)
var maxheight=SH/-2;      //maximale hoogte balkjes

//https://www.random.org/integer-sets/
var Arrbubble=[29, 45, 6, 67, 55, 24, 71, 42, 15, 34, 38, 76, 20, 19, 54, 81, 59, 23, 7, 1, 64, 49, 74, 72, 70, 4, 58, 92, 88, 33, 75, 53, 9, 57, 36, 79, 30, 44, 60, 95, 80, 82, 52, 85, 48, 90, 73, 99, 50, 21, 5, 83, 39, 93, 66, 62, 41, 25, 12, 96, 18, 61, 94, 40, 89, 68, 3, 26, 69, 10, 56, 46, 97, 43, 86, 77, 14, 17, 32, 27, 31, 65, 98, 8, 16, 37, 100, 35, 51, 87, 2, 28, 22, 63, 13, 11, 84, 47, 78, 91];
var BL=Arrbubble.length;
var Arrinsertion=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var IL=Arrinsertion.length;
var Arrquick=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var QL=Arrquick.length;
var Arrmerge=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
var ML=Arrmerge.length;
var states=[];

var bubbletext="Bubble sort is een van de eenvoudigste sorteeralgoritmes. Het algoritme loopt door het algoritme. Bij elk paar dat het tegenkomt wordt er gekeken welk getal groter is. Als het eerste getal van het paar groter is, dan worden de getallen omgedraait, als het tweede getal groter is, gebeurt er niks. Als het algoritme het laatste paar heeft vergeleken zijn er twee opties:  1. begin bij het eerste paar als er 2 getallen zijn omgedraait,                                            2: er zijn geen getallen omgedraaid en wat er gesorteerd moest worden is gesorteerd.";
var insertiontext="Insertion sort is een methode die mensen vaak gebruiken, bijvoorbeeld bij het sorteren van een pak kaarten. Bij elk cijfer of element wordt er gekeken waar hij moet in de rij van de al gesorteerde cijfer/elementen. Algoritmes doen dit door te kijken of het cijfer dat ze nu willen sorteren hoger of lager is dan het cijfer dat ervoor staat. Als het hoger is gaat het algoritme door met het sorteren van het eerstvolgende niet gesorteerde cijfer. Als het cijfer lager is wisselt hij het om met het andere cijfer en vergelijkt vervolgens dit cijfer weer met het cijfer dat ervoor staat.";
var quicktext1="Quick sort maakt gebruik van een zogeheten pivot, een getal. Het algoritme kijkt of het rode balkje groter of kleiner is dan de pivot. Als het getal groter is wordt het groen en komt rechts van de rode balk te staan. Als het getal kleiner is dan de pivot, komt het links van de rode balk te staan. Na een ronde wordt alles links van de pivot gesorteerd door een nieuwe pivot te kiezen, dit wordt net zolang herhaald tot alles links van de oorspronkelijke pivot gesorteerd is. Daarna wordt dat proces aan de rechterkant herhaald.";
var quicktext2="Het zou ideaal zijn als de pivot een getal zou zijn die ergens in het midden ligt qua waarde. Helaas is dit niet altijd zo. Het laatste cijfer van het stuk dat op dat moment gesorteerd wordt, wordt als pivot gekozen. Dit kan een hoog of laag getal zijn, of ergens tussen in. Het gevolg van een relatief hoog of laag getal is dat de twee helften oneerlijk verdeeld zijn.";
var mergetext1="Merge sort splitst de rij van getallen in tweeën. Elke helft wordt vervolgens ook weer in tweeën gesplitst. Dit wordt herhaald tot elk getal zijn eigen rijtje heeft. Daarna wordt alles gesorteerd door steeds nieuwe rijtjes te maken. Er wordt gekeken naar het eerste getal van twee rijtjes. Het laagste getal wordt vooraan het nieuwe rijtje gezet. Daarna herhaalt het algoritme deze stap net zo lang tot de twee oude rijtjes leeg zijn. Daarna gaat het algoritme twee andere rijtjes samenvoegen tot één rijtje, net zolang tot er nog maar één (gesorteerd) rijtje over is.";
var mergetext2="WARNING: door problemen met timing tijdens het sorteren is deze versie van merge sort niet stabiel. Probeer niet te snel dit sorteer algoritme weer te gebruiken.";

function setup() {
  canvas = createCanvas(SW,SH);
  background('white');
  canvas.parent('processing');
  //noLoop();
  textSize(20/1980*SW);
}

function draw() {
    translate(0,SH);


    if (sorting=='bubble') {
        clear();
        fill('#00343D');
        text(bubbletext,MW,MW-SH,0.2*SW,SH/2);
        fill('#5DA2AD');
        for (b=0;b<BL;b++) {
            rect(MW+AW/BL*b,0,AW/BL,maxheight/BL*Arrbubble[b]);
        }

        if (play==true) {
            bubblesort();
        }
    }

    else if (sorting=='insertion') {
        clear();
        fill('#00343D');
        text(insertiontext,MW,MW-SH,0.2*SW,SH/2);
        fill('#4986A3');
        for (n=0;n<IL;n++) {
            rect(MW+AW/IL*n,0,AW/IL,maxheight/IL*Arrinsertion[n]);
        }

        if (play==true) {
            insertionsort();
        }
    }

    else if (sorting=='quick') {
        clear();
        fill('#00343D');
        text(quicktext1,MW,MW-SH,0.2*SW,SH/2);
        text(quicktext2,0.8*SW-2*MW,MW-SH,0.2*SW,SH/2);
        for (q=0;q<QL;q++) {
            if (states[q]==0) {fill('#C90808');}
            else if (states[q]==1) {fill('#419370');}
            else {fill('#4986A3')}
            rect(MW+AW/QL*q,0,AW/QL,maxheight/QL*Arrquick[q]);
        }
        if (play==true) {
            quicksort(Arrquick,0,QL-1);
            play=false;
        }
    }
    else if (sorting=='merge') {
        clear();
        fill('#00343D');
        text(mergetext1,MW,MW-SH,0.2*SW,SH/2);
        fill('#C90808');
        text(mergetext2,0.8*SW-2*MW,MW-SH,0.2*SW,SH/2);
        fill('#4986A3');
        for (m=0;m<ML;m++) {
            rect(MW+AW/ML*m,0,AW/ML,maxheight/ML*Arrmerge[m]);
        }
        if (play==true) {
            mergesort(Arrmerge);
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

async function mergesort(array) { //https://bl.ocks.org/mbostock/1b5450d525babd28425f
  var arrays = [array.slice()],
      n = array.length,
      array0 = array,
      array1 = new Array(n);

  for (var m = 1; m < n; m <<= 1) {
    for (var i = 0; i < n; i += (m << 1)) {
       await merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
    }
    await sleep(1000);
    arrays.push(array1.slice());
    array = array0, array0 = array1, array1 = array;
  }

async function merge(left, right, end) {
    for (var i0 = left, i1 = right, j = left; j < end; ++j) {
      array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++];
    }
  }

  return arrays;
} 


