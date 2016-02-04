window.onload = function(){

  var clock = document.getElementById('clock');

  //ENNE TIMEOUTI KIRJUTAN ÜHE KORRA ÄRA
  writeDate();

  window.setInterval(function(){

    //iga ooteaja jarel kaivitatakse
    writeDate();

  }, 1000); //millisekundid - 1000ms = 1s

};

function writeDate(){

 // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
 var today = new Date();

 var hours = today.getHours();
 var minutes = today.getMinutes();
 var seconds = today.getSeconds();

 clock.innerHTML = setZeroBefore(hours) + ':'+ setZeroBefore(minutes) + ':' + setZeroBefore(seconds);

}
//lisab nulli kui arv on 10st vahem
function setZeroBefore(number){
  if(number < 10){
    number = '0' + number;
  }

  return number;
}
