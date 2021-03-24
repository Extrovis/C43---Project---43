var seconds;
var minutes;
var hours;

var mapHour;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

  angleMode(DEGREES)

  seconds = second();
  minutes = minute();
  hours = hour();

  if(hours > 12){
    var convertedHour = hours % 12;

    mapHour = map(convertedHour, 0, 12, 0, 360)
  }else{
    mapHour = map(hours, 0, 12, 0, 360)
  }

  mapSecond = map(seconds, 0, 60, 0, 360)

  mapMinute = map(minutes, 0, 60, 0, 360)

  push();

  translate(400, 400)

  rotate(mapHour)

  stroke(255, 0, 0)
  strokeWeight(7)

  line(0, 0, 0, -100)


  pop();

  push();

  translate(400, 400)

  rotate(mapMinute)

  stroke(0, 255, 0)
  strokeWeight(7)

  line(0, 0, 0, -200)


  pop();

  push();

  translate(400, 400)

  rotate(mapSecond)

  stroke(0, 0, 255)
  strokeWeight(7)

  line(0, 0, 0, -150)


  pop();

  noFill();

  stroke(255, 0, 0);
  strokeWeight(8);

  arc(400, 400, 400, 400, -90, mapHour -90);

  noFill();

  stroke(0, 255, 0);
  strokeWeight(8);

  arc(400, 400, 500, 500, -90, mapMinute -90);

  noFill();

  stroke(0, 0, 255);
  strokeWeight(8);

  arc(400, 400, 300, 300, -90, mapSecond -90);

  drawSprites();
}