window.onload = function(){
    var clock = document.getElementById('clock');
    writeTime();

    window.setInterval(function(){
      writeTime();
    }, 1000);

    var colors = ['red', 'blue', 'green', 'yellow'];
    clock.addEventListener('click', function(){
      var color = colors[Math.floor(Math.random()*colors.length)]; // StackOverflow
      clock.style.color = color;
    });
};

function writeTime(){
  var today = new Date();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

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
