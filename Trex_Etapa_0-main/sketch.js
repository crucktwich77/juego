
var trex ,trex_running;
var FondoImg
var cerdito,cerditoImg
var suelo
var guacala,guacalaImg
var obs,obs1,obs2
var vil,vilImg
var cermachimg
var maldad,trabas
function preload(){
FondoImg = loadImage("fndag.jpg")  
cerditoImg = loadImage("pgv.png")
guacalaImg = loadImage("guacala.png")
obs1 = loadImage("zub.png")
obs2 = loadImage("skb.png")
vilImg = loadImage("Villano.png")
cerdmachimg = loadImage("cerdito_macheteado.png")
}

function setup(){
  createCanvas(1200,900)
  cerdito = createSprite(50,190,50,50)
  //crear sprite del t-rex.
 cerdito.addImage(cerditoImg)
 cerdito.scale=0.52
 suelo=createSprite(200,899,1500,10)
 guacala=createSprite(900,700,50,50)
 guacala.addImage(guacalaImg)
 guacala.scale=0.34
 //maldad=createGroup()
 //trabas=createGroup()
 maldad= createGroup();
 trabas = createGroup();
}


function draw(){
  background(FondoImg)
  
if(keyDown("space")){
  cerdito.velocityY = -10

 
}

  
if(keyDown("right")){
  cerdito.velocityX = 10
 
}
if(keyDown("left")){
  cerdito.velocityX = -20

}
cerdito.velocityY = cerdito.velocityY + 1
drawSprites()
cerdito.collide(suelo) 
guacala.collide(suelo)
traba()
vill()
//if(maldad.isTouching(cerdito)){
//cerdito.changeAnimation(cermachimg)

//}
}
function vill(){
  if(frameCount%30==0){
    vil = createSprite(1000,Math.round(random(50,850)),20,20)
    vil.addImage(vilImg)
    vil.velocityX = -20
    vil.scale=0.40
    maldad.add(vill)
  }
  
  
}
function traba(){
  if(frameCount%70==0){
    var obs = createSprite(1000,Math.round(random(100,700)),20,20)
  obs.velocityX=-7
  var rand=Math.round(random(1,3))
  switch(rand){
    case 1:obs.addImage(obs1)
    break;
    case 2:obs.addImage(obs2)
    break;
    case 3:obs.addImage(guacalaImg)
    break;
    default:break
  }
  obs.scale=0.20
  trabas.add(obs)
  }
}