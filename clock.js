
window.onload = function () {

  var clock = document.getElementById('clock');

  clock.addEventListener('click', function(){
    console.log('klikk');
  });

  window.addEventListener('keypress', function(e){
    console.log(e);

    if(event.charCode == 13){
      alert('enter');
    }
  });

writeDate();

  window.setInterval(function(){
    writeDate();
  }, 1000); // 1000 millisekundit = 1 sekund

};

function writeDate(){

  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = setZeroBefore(hours) + ':' + setZeroBefore(minutes) + ':' + setZeroBefore(seconds);
  date.innerHTML = setZeroBefore(day) + '.' + setZeroBefore(month) + '.' + year;
}

//lisab nulli kui arv on 10st väiksem
function setZeroBefore(number) {

  if(number < 10){
    number = '0' + number;
  }
  return number;
}

function change() {

    var x = Math.floor(Math.random() * 256); // range is 0-255
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    console.log(thergb);
    document.body.style.background=thergb;
}

function boxMove() {

  var top = Math.floor(Math.random() * 90);
  var bot = Math.floor(Math.random() * 90);
  var left = Math.floor(Math.random() * 90);
  var right = Math.floor(Math.random() * 90);
  var top_pos = top + "%";
  var bot_pos = bot + "%";
  var left_pos = left + "%";
  var right_pos = right + "%";
  console.log(top_pos, bot_pos, left_pos, right_pos);
  document.getElementById('box').style.position="absolute";
  document.getElementById("box").style.top=top_pos;
  document.getElementById("box").style.bottom=bot_pos;
  document.getElementById("box").style.left=left_pos;
  document.getElementById("box").style.right=right_pos;
}
