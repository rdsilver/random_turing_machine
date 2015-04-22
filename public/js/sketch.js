var start_stop_button;

var tape = new Array();
var grids = 200;
var cell_size = 5;

var position;
var state = 1;
var symbol;

var y_position_tape = 10;

var states;
var symbols;
var max_states = 20;
var max_symbols= 20;

var rule_array = new Array();

var most_left;
var most_right;

function setup() {
  var myCanvas = createCanvas(300, 700);
  myCanvas.parent('sketch-holder');

  //Create Buttons  
  start_stop_button = createButton('New Turing Machine',100,100);
  start_stop_button.parent('sketch-holder');
  start_stop_button.mousePressed(newTuringMachine);
 
  fill(0);
  textSize(50);
  textAlign(CENTER);
  textFont("Helvetica");
  newTuringMachine();
  noStroke();
  resizeSketch();
}

function windowResized() {
  resizeSketch();
}

function resizeSketch() {
  var elt = document.getElementById('sketch-holder');
  resizeCanvas(elt.clientWidth, height);
}
 
 
function draw() {
  for (var x=most_left;x<most_right;x++) {
    fill(int((tape[x] * 2134)%255),int((tape[x] * 2347)%255),int((tape[x] * 1131)%255));
    rect( (width/2.0) + (((grids/2.0) - x) * cell_size)  , y_position_tape, cell_size, cell_size);
  }
  symbol = int(tape[position]) + 1;

  rules = rule_array[state][symbol].split(" ");

  state  = rules[0];
  tape[position] = rules[1] - 1;
  direction  = rules[2];
  if (direction == 0) {
    position-=1;
    if(position < most_left)
      most_left = position;

  } else {
    position+=1;
    if(position > most_right)
      most_right = position;
  }

  if (y_position_tape > height || most_left < 0 || most_right >= grids)
    newTuringMachine();

  y_position_tape+=cell_size;
}


function newTuringMachine() {
  background(0);
  y_position_tape = 10;
  states = round(random(1,max_states));
  symbols = round(random(1,max_symbols));
  tape = new Array();
  for (var i=0; i<grids; i++) {
    tape.push("0");
  }

  state = 1;
  position = tape.length/2;
  most_right = position;
  most_left = position;

  rule_array = create2DArray(states + 1);
  for (var x=1;x<=states;x++) {
    for (var y=1;y<=symbols;y++) {
      rule_array[x][y] = '' + round(random(1,states)) + ' ' +  round(random(1,symbols)) + ' ' + round(random(0,1));
    }
  }
}

function create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}