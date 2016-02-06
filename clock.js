//clock.js
window.onload = function(){
  var clock = document.getElementById('clock');
  window.setInterval(function(){
    writeDate();

  },1000);
  document.getElementById('changeBackground').addEventListener('click', changeBackground);
  document.getElementById('originalBackground').addEventListener('click', originalBackground);
  document.getElementById('biggerTime').addEventListener('click', biggerTime);
  document.getElementById('originalTime').addEventListener('click', originalTime);
};

function writeDate(){
  var today = new Date();

  var day = today.getDay();
  var month = today.getMonth() + 1; //hakkab 0st peale, +1 vaja otsa panna. dets on 11s kuu muidu.
  var year = today.getFullYear();

  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());

  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  document.getElementById("date").innerHTML = setZeroBefore(day) + "." + setZeroBefore(month) + "." + setZeroBefore(year);
}

function setZeroBefore(number){
  if(number<10){
    number = '0' + number;
  }
  return number;
}
function changeBackground(){
  document.body.style.background = "#00FF00";
}
function originalBackground(){
  document.body.style.background = "#00FFFF";
}
function biggerTime(){
  document.getElementById("clock").style.fontSize = "150px";
  document.getElementById("section").style.width = "650px";
}
function originalTime(){
  document.getElementById("clock").style.fontSize = "100px";
  document.getElementById("section").style.width = "450px";
}
