window.onload = function(){
    var clock = document.getElementById('clock');
    var name  = document.getElementById('name');
    var fontSelect = document.getElementById('fontSelection');

    WebFontConfig = {
        google: { families: [ 'Oswald::latin', 'Indie+Flower::latin', 'Dosis:700:latin', 'Lobster::latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();

    clock.style.textAlign = 'center';
    clock.style.marginTop = '25%';
    name.style.textAlign = 'center';
    writeTime();

    window.setInterval(function(){
      writeTime();
    }, 1000);

    fontSelect.addEventListener("change", function(){
      clock.style.fontSize = fontSelect.value;
    });

    clock.addEventListener('click', function(){
      clock.style.color = randomColor();
      clock.style.fontFamily = randomFont();
    });

    document.body.addEventListener('click', function(){
        document.body.style.background = randomColor();
    });
};

function randomColor(){
  var colors = ['red', 'blue', 'green', 'yellow', 'black'];
  return colors[Math.floor(Math.random()*colors.length)];
}

function randomFont(){
  var fonts = ['Oswald, latin', 'Indie+Flower, latin', 'Dosis, latin', 'Lobster, latin'];
  return fonts[Math.floor(Math.random()*fonts.length)];
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
