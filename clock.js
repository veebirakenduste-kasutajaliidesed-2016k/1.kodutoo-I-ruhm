window.onload = function clockTime(){
  today = new Date();

  H = today.getHours();
  M = today.getMinutes();
  S = today.getSeconds();

  M = checkTime(M);
  S = checkTime(S);
  document.getElementById('kell').innerHTML = 'Joosep Jõelehe kell';
  document.getElementById('kell').innerHTML = H + ' : ' + M + ' : ' + S;


  t = setTimeout(clockTime, 500);

};

  function checkTime(i) {
    if (i < 10) {i = "0" + i;}
    return i;
}

function randcolor(){
  document.getElementById('kell').style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}
