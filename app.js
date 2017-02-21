var count = 1;
var flicker = 1;
setInterval(function(){
  if(count == 1){
    document.getElementById('angle1').style.display = "none";
    document.getElementById('angle2').style.display = "inline";
    count = 2;
  } else if(count == 2) {
    document.getElementById('angle2').style.display = "none";
    document.getElementById('angle3').style.display = "inline";
    count = 3;
  } else {
    document.getElementById('angle1').style.display = "inline";
    document.getElementById('angle3').style.display = "none";
    count = 1;
  }
  if(flicker){
    document.getElementById('1').style.textShadow = "none";
    document.getElementById('2').style.textShadow = "none";
    document.getElementById('3').style.textShadow = "none";
    document.getElementById('4').style.textShadow = "none";
    flicker = 0;
  } else {
    document.getElementById('1').style.textShadow = "2px 2px #fff";
    document.getElementById('2').style.textShadow = "2px 2px #fff";
    document.getElementById('3').style.textShadow = "2px 2px #fff";
    document.getElementById('4').style.textShadow = "2px 2px #fff";
    flicker = 1;
  }
}, 300);
