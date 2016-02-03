// clock.js

window.onload = function(){

  var clock = document.getElementById('clock');

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

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = setZeroBefore(hours) + ':' + setZeroBefore(minutes) + ':' + setZeroBefore(seconds);

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
