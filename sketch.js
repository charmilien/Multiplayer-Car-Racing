var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var p;
var rankCount=0;
var form, player, game;
var cars, car1, car2, car3, car4;

function preload()
{
  c1=loadImage("Images/car1.png")
  c2=loadImage("Images/car2.png")
  c3=loadImage("Images/car3.png")
  c4=loadImage("Images/car4.png")
  track=loadImage("Images/track.jpg")
  bgi=loadImage("images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
