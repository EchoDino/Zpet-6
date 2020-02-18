// zdog-demo.js
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 1;
var currentFrame = 0;
var pet = [];
var ballzy= [];
const TAU = Zdog.TAU;
console.log(Zdog.TAU);
// create illo
var isSpinning = true;
const elem = '.illo'; //Which canvas to pick?
var colors = {
'red': '#ff0000',
'green': '#00ff00',
'blue': '#0000ff'
}

let illo = new Zdog.Illustration({
  element: elem,
  zoom: 1,
  dragRotate: true,
});
console.log(miceConf.config.numBalls);

// ------------------------------------------------------ model ------------------------------------------------ //
for(var ii = 0; ii < 1; ii++){
pet[ii] = new Zdog.Shape({
  addTo: illo,
  stroke: 0,
  color: 'red',
  //dragRotate: true,
});
for(var rr = 0; rr < miceConf.config.numBalls; rr++){
//console.log( miceConf.ballz[rr][3]);
pet[ii][rr] = new Zdog.Shape({
  addTo: pet[ii],
  //stroke: 15,
  translate: { x: miceConf.ballz[0][rr][1],y:miceConf.ballz[0][rr][2],z:miceConf.ballz[0][rr][3] },
  color: 'red',
  //dragRotate: true,
});

/*//snout
new Zdog.Tape({
startShape:pet[ii].snout,
endShape:pet[ii].head,
addTo:illo,
color: pet[ii].snout.color,
});
*/

}

}
new Zdog.Tape({
startShape:pet[0][7],
endShape:pet[0][8],
addTo:illo,
color: 'pink',
});
new Zdog.Tape({
startShape:pet[0][8],
endShape:pet[0][9],
addTo:illo,
color: 'pink',
});
// -------------------------------------------------------------- animate -------------------------------------------- //

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
function updateBreath() {                      
if(breathDir === 1) {  // breath in
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else {  // breath out
    breathAmt += breathInc;
    if(breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}
function updateAnimation() {                      
currentFrame += 1;
if (currentFrame >= miceConf.config.maxFrame) currentFrame=0;
//console.log(currentFrame);
}
function direction(dir,speed){
var x,y;
if (dir === 0){ x=speed; y=0; }else if (dir === 90){ x=0; y= -speed; }else if (dir === 180){ x= -speed; y=0; }else if (dir === 270){ x=0; y= -speed; }
//console.log(x,y);
return {x:x,y:y};
}

// update & render
illo.updateRenderGraph();
function animate() {
  // rotate illo each frame
  if ( isSpinning ) {
//updateBreath();
//updateAnimation();

//---------------------------------------------------------------------------//


//for(var ii = 0; ii < 1; ii++){
//for(var rr = 0; rr < miceConf.config.numBalls; rr++){
//pet[ii][rr].translate.x = miceConf.ballz[currentFrame][rr][1];
//pet[ii][rr].translate.y = miceConf.ballz[currentFrame][rr][2];
//pet[ii][rr].translate.z = miceConf.ballz[currentFrame][rr][3];
//console.log( miceConf.ballz[currentFrame][rr][2]);
//console.log( currentFrame);
//pet[ii][rr].translate.x = miceConf.ballz[currentFrame][rr][1];

//}

//}






//----------------------------------------------------------------------------
  }
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
setInterval(function(){

  if ( isSpinning ) {
updateBreath();
updateAnimation();

//---------------------------------------------------------------------------//


for(var ii = 0; ii < 1; ii++){
for(var rr = 0; rr < miceConf.config.numBalls; rr++){
pet[ii][rr].translate.x = miceConf.ballz[currentFrame][rr][1];
pet[ii][rr].translate.y = miceConf.ballz[currentFrame][rr][2];
pet[ii][rr].translate.z = miceConf.ballz[currentFrame][rr][3];
pet[ii][rr].color = miceConf.ballz[currentFrame][rr][0];
pet[ii][rr].stroke = miceConf.ballz[currentFrame][rr][4];
//console.log( miceConf.ballz[currentFrame][rr][2]);
//console.log( currentFrame);
//pet[ii][rr].translate.x = miceConf.ballz[currentFrame][rr][1];

}
}







}},60);

