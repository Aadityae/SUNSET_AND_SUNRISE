const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var TIME = 00

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black")
    textSize(2)
    text("Time:",TIME,40,40)


}

async function getBackgroundImg(){

  var response = await  fetch("http://worldtimeapi.org/api/timezone/Asia/Colombo")
  var responseJSON = await response.json()
  console.log(responseJSON)

  var datetime = responseJSON.datetime

  console.log(datetime)
  var hour = datetime.slice(14,16)
  console.log(hour)

  if(hour>= 04 && hour<=06)
  {
    bg = "sunrise1.png"

  }
  else if (hour>6 && hour<=08)
  {
    bg = "sunrise2.png"

  }else if (hour>08 && hour<=16)
  {
    bg = "sunrise4.png"
  }else if(hour>17 && hour<=23)
  {
    bg = "sunset8.png"
  }
  else (hour>23 && hour<=03)
  {
    bg = "sunset9.png"
  }
  backgroundImg = loadImage(bg)
  
//   write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
