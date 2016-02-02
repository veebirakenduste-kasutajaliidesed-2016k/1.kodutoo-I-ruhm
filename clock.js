window.onload = function(){

  var clock = document.getElementById("clock");

  clock.addEventListener('click', function(){

    console.log("click");

  });

  window.addEventListener('keypress', function(){

    console.log(event);

    if(event.charCode == 13){

      alert('enter');
    }

  });

  writeDate();

  window.setInterval(function(){

    writeDate();

  }, 1000); //millisekundid, 1000ms = 1s


};

function writeDate(){

  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = setZeroBefore(hours) + ':' + setZeroBefore(minutes) + ':' + setZeroBefore(seconds);

}

//lisab nulli, kui arv on kümnest väiksem
function setZeroBefore(number){

  if(number <10){
    number ='0' + number;

  }

  return number;

}
