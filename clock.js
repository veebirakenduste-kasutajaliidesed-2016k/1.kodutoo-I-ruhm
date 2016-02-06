window.onload = function(){
  var clock = document.getElementById('clock');
  var date = document.getElementById("date");
  var final = document.getElementById("final");
  document.getElementById("clock").style.fontFamily = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/font1.ttf";
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
  if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock1.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock2.png";
  }
  else if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock2.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock3.png";
  }
  else if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock3.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock1.png";
  }
}
function changeClock(){
  var clockface = document.getElementById("clockface");
  if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock1.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock2.png";
  }
  else if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock2.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock3.png";
  }
  else if (clockface.src == "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock3.png"){
    clockface.src = "http://localhost:5555/~robigin/kasutajaliidesed/1.kodutoo-I-ruhm/clock1.png";
  }
}
