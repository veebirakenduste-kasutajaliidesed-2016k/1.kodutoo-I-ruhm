window.onload = function () {

  var clock = document.getElementById('clock');
  var dateyear = document.getElementById('date');
  writeDate();

//millisekundid
  window.setInterval(function(){
//ooteaja järgi uuendatakse
  writeDate();
  }, 1000);

};

function writeDate(){
  //tänane kuupäev
  var today = new Date();

  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();


  var hours = today.getHours();
  var minutes  = today.getMinutes();
  var seconds = today.getSeconds();
  clock.innerHTML = ' Time:' +  setZeroBefore (hours) + ':' + setZeroBefore(minutes) +':'+ setZeroBefore(seconds);
  dateyear.innerHTML = 'Date:' + '.' + setZeroBefore(date) + '.' + setZeroBefore(month+1) + '.' + year;
}

function setZeroBefore(number) {
  if(number < 10){
    number="0"+number;
  }
  return number;
  }

  
