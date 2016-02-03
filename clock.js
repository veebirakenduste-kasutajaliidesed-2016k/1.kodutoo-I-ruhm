window.onload = function(){

  var clock_year = document.getElementById("clock_year");
  var clock_month = document.getElementById("clock_month");
  var clock_date = document.getElementById("clock_date");
  var clock_hour = document.getElementById("clock_hour");
  var clock_minute = document.getElementById("clock_minute");
  var clock_second = document.getElementById("clock_second");

  window.setInterval(function(){writeTime();}, 1000);

};

function writeTime(){

  clock_year.innerHTML = "AASTA <br>";
  clock_month.innerHTML = "KUU <br>";
  clock_date.innerHTML = "KUUPÄEV <br>";
  clock_hour.innerHTML = "TUND <br>";
  clock_minute.innerHTML = "MINUT <br>";
  clock_second.innerHTML = "SEKUND <br>";

  for(i = 1; i < 13; i++){
    if(i%2 === 0){
      clock_month.innerHTML += showCurrentTime(setZeroBefore(i), "select_month") + "<br>";
    }else{
      clock_month.innerHTML += showCurrentTime(setZeroBefore(i), "select_month");
    }
  }

  for(i = 1; i < 37; i++){
    if(i > 31){
      clock_date.innerHTML += "00";
    }else if(i%6 === 0){
      clock_date.innerHTML += showCurrentTime(setZeroBefore(i), "select_date") + "<br>";
    }else{
      clock_date.innerHTML += showCurrentTime(setZeroBefore(i), "select_date");
    }
  }

  for(i = 1; i < 25; i++){
    if(i === 24){
      clock_year.innerHTML += showCurrentTime(2024, "select_year");
      clock_hour.innerHTML += showCurrentTime(setZeroBefore(0), "select_hour");
    }else if(i%4 === 0){
      clock_year.innerHTML += showCurrentTime(i + 2000, "select_year") + "<br>";
      clock_hour.innerHTML += showCurrentTime(setZeroBefore(i), "select_hour") + "<br>";
    }else{
      clock_year.innerHTML += showCurrentTime(i + 2000, "select_year");
      clock_hour.innerHTML += showCurrentTime(setZeroBefore(i), "select_hour");
    }
  }

  for(i = 1; i < 61; i++){
    if(i === 60){
      clock_minute.innerHTML += showCurrentTime(setZeroBefore(0), "select_minute");
      clock_second.innerHTML += showCurrentTime(setZeroBefore(0), "select_second");
    }else if(i%10 === 0){
      clock_minute.innerHTML += showCurrentTime(setZeroBefore(i), "select_minute") + "<br>";
      clock_second.innerHTML += showCurrentTime(setZeroBefore(i), "select_second") + "<br>";
    }else{
      clock_minute.innerHTML += showCurrentTime(setZeroBefore(i), "select_minute");
      clock_second.innerHTML += showCurrentTime(setZeroBefore(i), "select_second");
    }
  }

}

function setZeroBefore(number){

  if(number < 10){
    number = '0' + number;
  }
  return number;

}

function showCurrentTime(number, format){

  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  if(format === "select_year" && number === year){
      number = "<b>" + number + "<b>";
  }else if(format === "select_month" && number === setZeroBefore(month)){
      number = "<b>" + number + "<b>";
  }else if(format === "select_date" && number === setZeroBefore(date)){
      number = "<b>" + number + "<b>";
  }else if(format === "select_hour" && number === setZeroBefore(hour)){
      number = "<b>" + number + "<b>";
  }else if(format === "select_minute" && number === setZeroBefore(minute)){
      number = "<b>" + number + "<b>";
  }else if(format === "select_second" && number === setZeroBefore(second)){
      number = "<b>" + number + "<b>";
  }
  return number;

}

/*

clock_hour.addEventListener('click', function(){

  console.log("click");

});

window.addEventListener('keypress', function(){

  console.log(event);

  if(event.charCode == 13){

    alert('enter');
  }

});

*/
