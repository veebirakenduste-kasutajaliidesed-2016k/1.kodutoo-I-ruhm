window.onload = function(){

  var clock = document.getElementById("clock");
  var clock_year = document.getElementById("clock_year");
  var clock_month = document.getElementById("clock_month");
  var clock_date = document.getElementById("clock_date");
  var clock_day = document.getElementById("clock_day");
  var clock_hour = document.getElementById("clock_hour");
  var clock_minute = document.getElementById("clock_minute");
  var clock_second = document.getElementById("clock_second");

  var theme = "style_1";
  var day_as_word = "style_1";

  writeTime();

  window.setInterval(function(){writeTime();}, 1000);

  /* Kasutaja saab kahekordse hiireklõpsuga muuta tausta värvi, hiireklõpsud
  peavad toimuma kella peal. */
  clock.addEventListener('dblclick', function(){
    if(theme === "style_1"){
      document.body.style.backgroundColor="#989898";
      document.body.style.color="#FFFFFF";
      theme = "style_2";
    } else {
      document.body.style.backgroundColor="#FFFFFF";
      document.body.style.color="#989898";
      theme = "style_1";
    }
  });

  /* Kui kasutaja vajutab hiirega kuupäeva peal, siis tuleb
   esile nädalapäeva nimetus. */
  clock_date.addEventListener('click', function(){

    var today = new Date();
    var day = today.getDay();
    var days = ["ESMASPÄEV", "TEISIPÄEV", "KOLMAPÄEV", "NELJAPÄEV", "REEDE", "LAUPÄEV", "PÜHAPÄEV"];

    if(day_as_word === "style_1"){
      clock_day.innerHTML = days[day - 1];
      day_as_word = "style_2";
    } else {
      clock_day.innerHTML = "";
      day_as_word = "style_1";
    }
  });

  /* Numbritega 1,2,3 saab kasutaja muuta kella suurust. */
  window.addEventListener('keypress', function(event){

    var key_code = event.keyCode;

    if(key_code === 49) {
      document.body.style.fontSize="10px";
    }else if(key_code === 50){
      document.body.style.fontSize="15px";
    }else if(key_code === 51){
      document.body.style.fontSize="20px";
    }
  });
};

/* Siin tuuakse tsükleid kasutades esile kõik numbrid, mis kella ja kuupäeva
jaoks vajalikud on. */
function writeTime(){

  clock_year.innerHTML = "";
  clock_month.innerHTML = "";
  clock_date.innerHTML = "";
  clock_hour.innerHTML = "";
  clock_minute.innerHTML = "";
  clock_second.innerHTML = "";

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

/* Siin märgistatakse rasvalt ära praegune kellaaeg. */
function showCurrentTime(number, format){

  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  if(format === "select_year" && number === year){
      number = "<font color='black'><b>" + number + "</font></b>";
  }else if(format === "select_month" && number === setZeroBefore(month)){
      number = "<font color='black'><b>" + number + "</font></b>";
  }else if(format === "select_date" && number === setZeroBefore(date)){
      number = "<font color='black'><b>" + number + "</font></b>";
  }else if(format === "select_hour" && number === setZeroBefore(hour)){
      number = "<font color='black'><b>" + number + "</font></b>";
  }else if(format === "select_minute" && number === setZeroBefore(minute)){
      number = "<font color='black'><b>" + number + "</font></b>";
  }else if(format === "select_second" && number === setZeroBefore(second)){
      number = "<font color='black'><b>" + number + "</font></b>";
  }
  return number;
}
