 window.onload = function(){

   var clock = document.getElementById('clock');


   window.setInterval(function(){

     // iga ooteaja järel käivitatakse
     writeDate();

   }, 100);// millisekundid - 1000ms = 1s


 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
 // var year = today.getFullYear();
  var day = today.getDay();
 // var month = today.getMonth();
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Veeb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "Mai";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  var kuu = month[today.getMonth()]; 

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds + '<br/>' + day + ' ' + kuu;

}

function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}

function smaller() {
  document.getElementById("clock").style.fontSize = "20pt";
}

function bigger() {
  document.getElementById("clock").style.fontSize = "70pt";
}

function reset() {
  document.getElementById("clock").style.fontSize = "50pt";
  document.getElementById("clock").style.padding  = "100px 0px 0px 0px";
  //algne suurus ja asukoht
}

function moveUp() {
  document.getElementById("clock").style.padding  = "50px 0px 0px 0px";
}

function moveDown() {
  document.getElementById("clock").style.padding = "150px 0px 0px 0px";
}