window.onload = function(){
  var clock = document.getElementById("clock");
  var date = document.getElementById("date");
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
  clock.innerHTML = setZeroBefore(hours) + ":" + setZeroBefore(minutes)+ ":" + setZeroBefore(seconds);
  date.innerHTML = setZeroBefore(day) + "." + setZeroBefore(month) + "." + year;
}
function setZeroBefore(number){
  if(number<10){
    number = "0"+number;
  }
  return number;
}
