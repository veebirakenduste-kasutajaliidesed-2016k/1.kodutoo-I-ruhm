window.onload = function(){
    var clock = document.getElementById('clock');
    var name  = document.getElementById('name');
    var body = document.getElementsByTagName('body');

    clock.style.textAlign = 'center';
    clock.style.marginTop = '25%';
    name.style.textAlign = 'center';
    writeTime();

    window.setInterval(function(){
      writeTime();
    }, 1000);


    clock.addEventListener('click', function(){
      clock.style.color = randomColor();
    });

    document.addEventListener('keydown', function(){
      if(event.keyCode == "38"){ // up
        body.style.background = randomColor();
      } else if(event.keyCode == "40"){ // down

      } else if(event.keyCode == "37"){ // left

      } else if(event.keyCode == "39"){ // right

      }
    });
};

function randomColor(){
  var colors = ['red', 'blue', 'green', 'yellow', 'black'];
  return colors[Math.floor(Math.random()*colors.length)];
}

function writeTime(){
  var today = new Date();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  h = setZeroBefore(h);
  m = setZeroBefore(m);
  s = setZeroBefore(s);

  clock.innerHTML = h + ":" + m + ":" + s;
}

function setZeroBefore(number){
  if (number < 10){
    number = '0' + number;
  }

  return number;
}
