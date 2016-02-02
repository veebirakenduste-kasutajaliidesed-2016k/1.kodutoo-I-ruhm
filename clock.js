window.onload = function(){

  var clock_hour = document.getElementById("clock_hour");
  var clock_minute = document.getElementById("clock_minute");
  var clock_second = document.getElementById("clock_second");

  window.setInterval(function(){

    writeTime();

  }, 1000);

};

function writeTime(){

  clock_hour.innerHTML = "TUND <br>";
  clock_minute.innerHTML = "MINUT <br>";
  clock_second.innerHTML = "SEKUND <br>";

  for(i = 1; i < 25; i++){

    if(i === 24){

      clock_hour.innerHTML += makeNumberBold(setZeroBefore(0), "select_hour");

    }else if(i%4 === 0){

      clock_hour.innerHTML += makeNumberBold(setZeroBefore(i), "select_hour") + "<br>";

    }else{

      clock_hour.innerHTML += makeNumberBold(setZeroBefore(i), "select_hour");

    }
  }

  for(i = 1; i < 61; i++){

    if(i === 60){

      clock_minute.innerHTML += makeNumberBold(setZeroBefore(0), "select_minute");
      clock_second.innerHTML += makeNumberBold(setZeroBefore(0), "select_second");

    }else if(i%10 === 0){

      clock_minute.innerHTML += makeNumberBold(setZeroBefore(i), "select_minute") + "<br>";
      clock_second.innerHTML += makeNumberBold(setZeroBefore(i), "select_second") + "<br>";

    }else{

    clock_minute.innerHTML += makeNumberBold(setZeroBefore(i), "select_minute");
    clock_second.innerHTML += makeNumberBold(setZeroBefore(i), "select_second");

    }
  }
}

function setZeroBefore(number){

  if(number < 10){

    number = '0' + number;

  }

  return number;

}

function makeNumberBold(number, format){

  var today = new Date();

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  if(format === "select_hour"){

    if(number === setZeroBefore(hour)){

      number = "<b>" + number + "<b>";

    }

  }else if(format === "select_minute"){

    if(number === setZeroBefore(minute)){

      number = "<b>" + number + "<b>";

    }

  }else{

    if(number === setZeroBefore(second)){

      number = "<b>" + number + "<b>";

    }
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
