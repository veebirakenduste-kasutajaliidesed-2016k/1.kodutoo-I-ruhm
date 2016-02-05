// clock.js

window.onload = function(){

  var clock = document.getElementById('clock');

  clock.addEventListener('click', function(){

  document.getElementById("clock").style.fontFamily = "Comic Sans MS";
  document.body.style.backgroundColor = "#FF00FF";

});

  // enne timeouiti kirjutan ühe korra ära
  writeDate();
// millisekundid 1000ms = 1s
  window.setInterval(function(){

    // Iga ootaja järel käivitatakse
    writeDate();

  }, 1000);

};


function writeDate(){

  var today = new Date();

  var day = today.getDay();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = setZeroBefore(hours) + ':' + setZeroBefore(minutes) + ':' + setZeroBefore(seconds);
  document.getElementById("today").innerHTML = setZeroBefore(day) + "." + setZeroBefore(month) + "." + (year);
}

function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}

function clockRed() {
  document.getElementById("clock").style.color = "red";
}

function clockGreen() {
  document.getElementById("clock").style.color = "green";
}

function clockWhite() {
  document.getElementById("clock").style.color = "white";
}

function clockBig() {
  document.getElementById("clock").style.fontSize = "130%";
}

function clockStandard() {
  document.getElementById("clock").style.fontSize = "100%";
}
