var dog , happyDog , Food , database , foodstock

function preload()
{

  dog.image = loadImage("dogImg.png");
  
}

function setup() {
  database = firebase.database();

  createCanvas(500,500);
  dog = createsprite(250,250,10,10);
  var foodstock = database.ref('Food');
  foodstock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(Food);
    dog.addImage("dogImg1.png");
}

  drawSprites();
  text(Press UP_ARROW key to feed drago milk);
   textSize(35);
   fill();
   stroke();

}

function readStock(data){
  Food = data.val();
}
function writeStock(x){
  database.ref('/').update({
    
  })
}
