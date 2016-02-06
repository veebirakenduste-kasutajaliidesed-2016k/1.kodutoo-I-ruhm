window.onload = function(){

  var clock = document.getElementById('clock');

  var clock = document.getElementById('date');

  window.setInterval(function(){

    // iga ooteaja järel käivitatakse
    writeDate();

  }, 100);// millisekundid - 1000ms = 1s


};

function writeDate(){

 // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
 var today = new Date

 var hours = setZeroBefore(today.getHours());
 var minutes = setZeroBefore(today.getMinutes());
 var seconds = setZeroBefore(today.getSeconds());

 var day = today.getDay();
 var month = today.getMonth() + 1;
 var year = today.getFullYear();

 clock.innerHTML = hours + ':'+ minutes + ':' + seconds + ' ' + setZeroBefore(day) + '.' + setZeroBefore(month+1) + '.' + year;

}
//lisab nulli kui arv on kymnest väiksem
function setZeroBefore(number){
  if(number < 10){
    number = '0' + number;
  }
  return number;
}
