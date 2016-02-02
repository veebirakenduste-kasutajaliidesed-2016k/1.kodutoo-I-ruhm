window.onload = function(){
writeDate();
   var clock = document.getElementById('clock');
   window.setInterval(function(){
writeDate();

   }, 1000 //1000 = 1s
 );


 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();
  var longmonth = ["January", "February", "March", "April", "June", "July", "August", "September", "November", "December"];
  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());
  var day = today.getDate();
  var month = longmonth[today.getMonth()];
  var year = today.getFullYear();

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;
  date.innerHTML = day + '.' + ' ' month + ',' + ' ' + year;
}


//lisab 0 kui arv on 10st väiksem
function setZeroBefore(number){
  if(number < 10){
number = '0' + number;

  }
return number;
}
