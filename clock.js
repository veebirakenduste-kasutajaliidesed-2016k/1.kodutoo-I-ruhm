function startTime(){
  var weekdays = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDay();
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;

  document.getElementById('weekday').innerHTML=
  weekdays[d];

  document.getElementById('hourbar').value = h;
  document.getElementById('minutebar').value = m;
  document.getElementById('secondbar').value = s;

  var hdeg = 360/24*h;
  var mdeg = 6*m+90;
  var sdeg = 6*s+90;
  document.getElementById('hourhand').style.transform = 'rotate('+hdeg+'deg)';
  document.getElementById('minutehand').style.transform = 'rotate('+mdeg+'deg)';
  document.getElementById('secondhand').style.transform = 'rotate('+sdeg+'deg)';


  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10){i = "0" + i;}
    return i;
}
function randcolor(){
  document.getElementById('txt').style.color = "#"+((1<<24)*Math.random()|0).toString(16);
    document.getElementById('weekday').style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}
