window.onload = function(){

  var clock_hour = document.getElementById("clock_hour");
  var clock_minute = document.getElementById("clock_minute");
  var clock_second = document.getElementById("clock_second");

  window.setInterval(function(){

    writeSecond();

  }, 1000);

};



function writeSecond(){

  clock_second.innerHTML = "SEKUND";
  clock_second.innerHTML += "<br>";

  for(i = 1; i < 61; i++){

    if(i%10 === 0){

      clock_second.innerHTML += makeNumberBold(setZeroBefore(i));
      clock_second.innerHTML += "<br>";

    }else{

    clock_second.innerHTML += makeNumberBold(setZeroBefore(i));

    }
  }
}

function setZeroBefore(number){

  if(number < 10){

    number = '0' + number;

  }

  return number;

}

function makeNumberBold(number){

  var today = new Date();
  var second = today.getSeconds();

  if(number === setZeroBefore(second)){

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
