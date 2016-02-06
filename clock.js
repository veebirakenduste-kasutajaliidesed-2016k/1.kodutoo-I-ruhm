window.onload = function(){

  var clock = document.getElementById('clock');

  //ENNE TIMEOUTI KIRJUTAN ÜHE KORRA ÄRA
  writeDate();

  window.setInterval(function(){

    //iga ooteaja jarel kaivitatakse
    writeDate();

  }, 1000); //millisekundid - 1000ms = 1s
  
  document.getElementById('background1').addEventListener('click', background1);
  document.getElementById('background2').addEventListener('click', background2);
  document.getElementById('background3').addEventListener('click', background3);
  document.getElementById('background4').addEventListener('click', background4);
  document.getElementById('background5').addEventListener('click', background5);
  
  document.getElementById('bigger').addEventListener('click', bigger);
  document.getElementById('normal').addEventListener('click', normal);

};

function writeDate(){

 // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
 var today = new Date();
 
 var day = today.getDay();
 var month = today.getMonth() + 1;
 var year = today.getFullYear();
 
 document.getElementById("date").innerHTML = setZeroBefore(day) + "." + setZeroBefore(month) + "." + setZeroBefore(year);

}
//lisab nulli kui arv on 10st vahem
function setZeroBefore(number){
  if(number < 10){
    number = '0' + number;
  }

  return number;
}


function background1(){
  document.body.style.background = "#33FFFF";
}

function background2(){
  document.body.style.background = "#6600FF";
}

function background3(){
  document.body.style.background = "#CC00FF";
}

function background4(){
  document.body.style.background = "#00FF33";
}

function background5(){
  document.body.style.background = "white";
}

function bigger(){
  document.getElementById("date").style.fontSize = "150px";
  document.getElementById("script").style.width = "650px";
}
function normal(){
  document.getElementById("date").style.fontSize = "100px";
  document.getElementById("script").style.width = "450px";
}


