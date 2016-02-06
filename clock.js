window.onload = function(){
  document.body.style.backgroundColor = "yellow";
  var clock = document.getElementById('clock');
  var final = document.getElementById("final");
  document.getElementById('clockface').addEventListener('click', changeClock);
  final.style.margin = "-35% 25%";
  final.style.opacity = "0.8";
  clock.style.margin = "17% 35%";
  clock.style.fontSize = "500%";
  window.addEventListener('keypress', function (e) {
      if (e.keyCode == 49) {
          changeClock();
      }
  }, false);
  window.addEventListener('keypress', function (e) {
      if (e.keyCode == 50) {
          changeBackground();
      }
  }, false);
  //Aeg millisekundites
  writeDate();
  window.setInterval(function(){
    writeDate();
  }, 1000);
};

function writeDate(){
  var time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  day = time.getDate();
  month = time.getMonth() + 1;
  year = time.getFullYear();
  clock.innerHTML = setZeroBefore(hours) + ":" + setZeroBefore(minutes)+ ":" + setZeroBefore(seconds) + "\n" + setZeroBefore(day) + "." + setZeroBefore(month) + "." + year;
}
function setZeroBefore(number){
  if(number<10){
    number = "0"+number;
  }
  return number;
}
function changeClock(){
  var clockface = document.getElementById("clockface");
  if (clockface.src == "http://i.imgur.com/HANJNFG.png"){
    clockface.src = "http://i.imgur.com/38D3QQM.png";
  }
  else if (clockface.src == "http://i.imgur.com/38D3QQM.png"){
    clockface.src = "http://i.imgur.com/rn55Pwf.png";
  }
  else if (clockface.src == "http://i.imgur.com/rn55Pwf.png"){
    clockface.src = "http://i.imgur.com/HANJNFG.png";
  }
}
function changeBackground(){
  var background = document.body.style.backgroundColor;
  if (document.body.style.backgroundColor == "yellow"){
    document.body.style.backgroundColor = "blue";
  }
  else if (document.body.style.backgroundColor == "blue"){
    document.body.style.backgroundColor = "gray";
  }
  else if (document.body.style.backgroundColor == "gray"){
    document.body.style.backgroundColor = "green";
  }
  else if (document.body.style.backgroundColor == "green"){
    document.body.style.backgroundColor = "yellow";
  }
}
